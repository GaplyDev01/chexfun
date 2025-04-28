// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ChessWagerEscrow is ReentrancyGuard, Ownable {
    enum GameStatus { Waiting, Ongoing, Finished, Disputed }
    enum Result { None, Player1Win, Player2Win, Draw }

    struct Game {
        address player1;
        address player2;
        uint256 wager;
        GameStatus status;
        Result result;
        uint256 lastMoveTime;
        uint256 createdAt;
        address winner;
    }

    uint256 public constant TIMEOUT = 1 days;
    uint256 public gameIdCounter;
    address public arbitrator;
    mapping(uint256 => Game) public games;

    event GameCreated(uint256 indexed gameId, address indexed player1, address indexed player2, uint256 wager);
    event GameJoined(uint256 indexed gameId, address indexed player2);
    event GameFinished(uint256 indexed gameId, Result result, address winner);
    event DisputeRaised(uint256 indexed gameId, address indexed raiser);
    event DisputeResolved(uint256 indexed gameId, Result result, address winner);
    event GameRefunded(uint256 indexed gameId, address indexed player1);

    modifier onlyPlayers(uint256 gameId) {
        require(msg.sender == games[gameId].player1 || msg.sender == games[gameId].player2, "Not a player");
        _;
    }
    modifier onlyArbitrator() {
        require(msg.sender == arbitrator, "Not arbitrator");
        _;
    }

    constructor(address _arbitrator, address initialOwner) Ownable(initialOwner) {
        require(_arbitrator != address(0), "Arbitrator required");
        arbitrator = _arbitrator;
    }

    function createGame(address _opponent) external payable nonReentrant returns (uint256) {
        require(msg.value > 0, "Wager required");
        require(_opponent != address(0) && _opponent != msg.sender, "Invalid opponent");
        gameIdCounter++;
        games[gameIdCounter] = Game({
            player1: msg.sender,
            player2: _opponent,
            wager: msg.value,
            status: GameStatus.Waiting,
            result: Result.None,
            lastMoveTime: block.timestamp,
            createdAt: block.timestamp,
            winner: address(0)
        });
        emit GameCreated(gameIdCounter, msg.sender, _opponent, msg.value);
        return gameIdCounter;
    }

    function joinGame(uint256 gameId) external payable nonReentrant {
        Game storage game = games[gameId];
        require(game.status == GameStatus.Waiting, "Game not joinable");
        require(msg.value == game.wager, "Wager mismatch");
        require(msg.sender == game.player2, "Not invited");
        game.status = GameStatus.Ongoing;
        game.lastMoveTime = block.timestamp;
        emit GameJoined(gameId, msg.sender);
    }

    function reportResult(uint256 gameId, Result _result) external onlyPlayers(gameId) nonReentrant {
        Game storage game = games[gameId];
        require(game.status == GameStatus.Ongoing, "Not ongoing");
        require(_result == Result.Player1Win || _result == Result.Player2Win || _result == Result.Draw, "Invalid result");
        if (_result == Result.Player1Win) {
            game.winner = game.player1;
        } else if (_result == Result.Player2Win) {
            game.winner = game.player2;
        }
        game.result = _result;
        game.status = GameStatus.Finished;
        _payout(gameId);
        emit GameFinished(gameId, _result, game.winner);
    }

    function raiseDispute(uint256 gameId) external onlyPlayers(gameId) {
        Game storage game = games[gameId];
        require(game.status == GameStatus.Ongoing, "Not ongoing");
        game.status = GameStatus.Disputed;
        emit DisputeRaised(gameId, msg.sender);
    }

    function resolveDispute(uint256 gameId, Result _result) external onlyArbitrator nonReentrant {
        Game storage game = games[gameId];
        require(game.status == GameStatus.Disputed, "Not disputed");
        require(_result == Result.Player1Win || _result == Result.Player2Win || _result == Result.Draw, "Invalid result");
        if (_result == Result.Player1Win) {
            game.winner = game.player1;
        } else if (_result == Result.Player2Win) {
            game.winner = game.player2;
        }
        game.result = _result;
        game.status = GameStatus.Finished;
        _payout(gameId);
        emit DisputeResolved(gameId, _result, game.winner);
    }

    function claimTimeout(uint256 gameId) external onlyPlayers(gameId) nonReentrant {
        Game storage game = games[gameId];
        require(game.status == GameStatus.Ongoing, "Not ongoing");
        require(block.timestamp > game.lastMoveTime + TIMEOUT, "Timeout not reached");
        game.status = GameStatus.Finished;
        game.winner = msg.sender;
        game.result = (msg.sender == game.player1) ? Result.Player1Win : Result.Player2Win;
        _payout(gameId);
        emit GameFinished(gameId, game.result, msg.sender);
    }

    function refundUnjoinedGame(uint256 gameId) external nonReentrant {
        Game storage game = games[gameId];
        require(game.status == GameStatus.Waiting, "Game not refundable");
        require(msg.sender == game.player1, "Only creator can refund");
        require(block.timestamp > game.createdAt + TIMEOUT, "Refund timeout not reached");
        game.status = GameStatus.Finished;
        game.wager = 0;
        (bool sent,) = payable(game.player1).call{value: game.wager}("");
        require(sent, "Refund failed");
        emit GameRefunded(gameId, game.player1);
    }

    function _payout(uint256 gameId) internal {
        Game storage game = games[gameId];
        uint256 total = game.wager * 2;
        if (game.result == Result.Draw) {
            (bool sent1,) = payable(game.player1).call{value: game.wager}("");
            require(sent1, "Payout failed: player1");
            (bool sent2,) = payable(game.player2).call{value: game.wager}("");
            require(sent2, "Payout failed: player2");
        } else if (game.winner != address(0)) {
            (bool sent,) = payable(game.winner).call{value: total}("");
            require(sent, "Payout failed: winner");
        }
    }

    function updateArbitrator(address _arbitrator) external onlyOwner {
        require(_arbitrator != address(0), "Invalid arbitrator");
        arbitrator = _arbitrator;
    }

    function emergencyWithdraw(uint256 gameId) external onlyOwner nonReentrant {
        Game storage game = games[gameId];
        require(game.status != GameStatus.Ongoing, "Game still active");
        uint256 total = address(this).balance;
        payable(owner()).transfer(total);
    }
}
