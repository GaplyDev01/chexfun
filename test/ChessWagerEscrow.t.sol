// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../contracts/ChessWagerEscrow.sol";

contract ChessWagerEscrowTest is Test {
    ChessWagerEscrow escrow;
    address player1 = address(0x1);
    address player2 = address(0x2);
    address arbitrator = address(0xA);
    address owner = address(0xB);
    uint256 wager = 1 ether;

    function setUp() public {
        vm.deal(player1, 10 ether);
        vm.deal(player2, 10 ether);
        vm.deal(address(this), 100 ether);
        vm.prank(owner);
        escrow = new ChessWagerEscrow(arbitrator, owner);
    }

    function testCreateGame() public {
        vm.prank(player1);
        uint256 gameId = escrow.createGame{value: wager}(player2);
        (address p1, address p2, uint256 w, , , , , ) = escrow.games(gameId);
        assertEq(w, wager);
    }

    function testJoinGame() public {
        vm.prank(player1);
        uint256 gameId = escrow.createGame{value: wager}(player2);
        vm.prank(player2);
        escrow.joinGame{value: wager}(gameId);
        (address p1, address p2, uint256 w, , , , , ) = escrow.games(gameId);
        assertEq(p2, player2);
        assertEq(w, wager); // Contract only tracks initial wager
    }

    function testOnlyArbitratorCanResolveDispute_revertForNonArbitrator() public {
        vm.prank(player1);
        uint256 gameId = escrow.createGame{value: wager}(player2);
        vm.prank(player2);
        escrow.joinGame{value: wager}(gameId);
        vm.prank(player1);
        escrow.raiseDispute(gameId);
        vm.prank(player2);
        vm.expectRevert();
        escrow.resolveDispute(gameId, ChessWagerEscrow.Result.Player1Win);
    }

    function testOnlyArbitratorCanResolveDispute_succeedsForArbitrator() public {
        vm.prank(player1);
        uint256 gameId = escrow.createGame{value: wager}(player2);
        vm.prank(player2);
        escrow.joinGame{value: wager}(gameId);
        vm.prank(player1);
        escrow.raiseDispute(gameId);
        (,,,ChessWagerEscrow.GameStatus status,,, ,) = escrow.games(gameId);
        emit log_named_uint("Game status after dispute", uint(status));
        emit log_named_address("Arbitrator address (contract)", escrow.arbitrator());
        emit log_named_address("Arbitrator address (test)", arbitrator);
        emit log_named_uint("Contract balance before resolveDispute", address(escrow).balance);
        vm.prank(arbitrator);
        emit log_named_address("msg.sender before resolveDispute", arbitrator);
        escrow.resolveDispute(gameId, ChessWagerEscrow.Result.Player1Win);
    }

    function testRefundUnjoinedGame() public {
        vm.prank(player1);
        uint256 gameId = escrow.createGame{value: wager}(player2);
        (,,,ChessWagerEscrow.GameStatus status,,,uint256 createdAt, ) = escrow.games(gameId);
        emit log_named_uint("Game status before refund", uint(status));
        emit log_named_uint("Game createdAt", createdAt);
        emit log_named_uint("Block timestamp before warp", block.timestamp);
        vm.warp(createdAt + 1 days + 1);
        emit log_named_uint("Block timestamp after warp", block.timestamp);
        emit log_named_address("msg.sender before refundUnjoinedGame", player1);
        emit log_named_uint("Contract balance before refundUnjoinedGame", address(escrow).balance);
        vm.prank(player1);
        escrow.refundUnjoinedGame(gameId);
        (address p1, address p2, uint256 w, ChessWagerEscrow.GameStatus status2, ChessWagerEscrow.Result result, uint256 lastMoveTime, uint256 createdAt2, address winner) = escrow.games(gameId);
        assertEq(w, 0);
    }
}
