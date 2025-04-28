"use client";
import { useState, useEffect } from "react";
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { supabase } from "../core/supabaseClient";
import { getEscrowContract } from "../core/escrow";
import { ethers } from "ethers";

function isEip1193Provider(obj: unknown): obj is { request: (...args: unknown[]) => Promise<unknown> } {
  return typeof obj === 'object' && obj !== null && 'request' in obj && typeof (obj as { request?: unknown }).request === 'function';
}

declare global {
  interface Window {
    ethereum?: unknown;
  }
}

import Clock from "../components/Clock";
import StreamerOverlay from "../components/StreamerOverlay";

function getGameIdFromUrl() {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get("gameId");
}

function isOverlayMode() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.get("overlay") === "1";
}




export default function ChessGameBoard() {
  const [ready, setReady] = useState(false);
  const [opponentReady, setOpponentReady] = useState(false);
  const [assignedColor, setAssignedColor] = useState<'w' | 'b' | null>(null);

  // Get wallet address for display (must be called at the top level)
  const { address, status } = useGlobalWalletSignerAccount();
  const [game, setGame] = useState(new Chess());
  const [gameId, setGameId] = useState<string | null>(null);
  const [lastMoveSquares, setLastMoveSquares] = useState<{from: string, to: string} | null>(null);
  const [moveError, setMoveError] = useState<string | null>(null);
  const [whiteTime] = useState(5 * 60);
  const [blackTime] = useState(5 * 60);
  const [activeColor, setActiveColor] = useState<'w' | 'b'>('w');
  const [gameStatus, setGameStatus] = useState<string>('active');
  const [infoBanner] = useState<string | null>(null);
  const [blackPlayer, setBlackPlayer] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const [lastCaptured, setLastCaptured] = useState<{ piece: string, color: 'w' | 'b' } | null>(null);
  const [captureAnim, setCaptureAnim] = useState(false);

  useEffect(() => {
    const id = getGameIdFromUrl();
    setGameId(id);
    if (!id) {
      return;
    }
    // Clean up game if user leaves before start and is the only player
    const handleBeforeUnload = async () => {
      if (gameStatus === 'waiting' && id && address && (!blackPlayer || blackPlayer === 'BOT')) {
        await supabase.from('games').delete().eq('id', id);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  
    // Fetch moves and reconstruct game
    async function fetchGame() {
      const { data: moves, error: movesError } = await supabase
        .from("moves")
        .select("move")
        .eq("game_id", id ?? "")
        .order("move_number", { ascending: true });
      if (movesError) {
        return;
      }
      const chess = new Chess();
      console.log('[DEBUG] Replaying moves:', moves);
      for (const m of moves || []) {
        const beforeFen = chess.fen();
        const moveResult = chess.move(m.move);
        console.log(`[DEBUG] Move: ${m.move}, FEN before: ${beforeFen}, FEN after: ${chess.fen()}, Move result:`, moveResult);
      }
      setGame(chess);
      console.log('[DEBUG] Final FEN after replay:', chess.fen());
    }
    async function fetchPlayers() {
      const { data: games, error: gameError } = await supabase
        .from("games")
        .select("black_player,status,white_player,white_player_id,black_player_id,ready_white,ready_black")
        .eq("id", id ?? "")
        .single();
      if (!gameError && games) {
        setBlackPlayer(games.black_player || null);
        setGameStatus(games.status);
        // Ready state logic
        console.log('[DEBUG] fetchPlayers:', games);
        if (address && games.white_player === address) {
          setReady(!!games.ready_white);
          setOpponentReady(!!games.ready_black);
        } else if (address && games.black_player === address) {
          setReady(!!games.ready_black);
          setOpponentReady(!!games.ready_white);
        }
      }
    }
    fetchGame();
    fetchPlayers();
    // Real-time subscription
    const sub = supabase
      .channel('public:moves')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'moves', filter: `game_id=eq.${id}` }, payload => {
        if (payload.new && payload.new.move) {
          setGame(prev => {
            const chess = new Chess(prev.fen());
            chess.move(payload.new.move);
            setActiveColor(chess.turn() as 'w' | 'b');
            return chess;
          });
        }
      })
      .subscribe();
    // Listen for game status changes and player joins
    const subGame = supabase
      .channel('public:games')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'games', filter: `id=eq.${id}` }, payload => {
        if (payload.new && payload.new.status) {
          setGameStatus(payload.new.status);
        }
        if (payload.new && payload.new.black_player) {
          setBlackPlayer(payload.new.black_player);
        }
        // Ready state update
        if (address && payload.new.white_player === address) {
          setReady(!!payload.new.ready_white);
          setOpponentReady(!!payload.new.ready_black);
        } else if (address && payload.new.black_player === address) {
          setReady(!!payload.new.ready_black);
          setOpponentReady(!!payload.new.ready_white);
        }
      })
      .subscribe();
    return () => { supabase.removeChannel(sub); supabase.removeChannel(subGame); };
  }, [address, blackPlayer, gameStatus]);

  // Ready logic and color assignment
  useEffect(() => {
    if (gameStatus === 'waiting' && blackPlayer && opponentReady && ready && !assignedColor && gameId) {
      // Only one player should assign colors
      const assignColors = async () => {
        const isWhite = Math.random() < 0.5;
        const myColor = isWhite ? 'w' : 'b';
        // Fetch both player addresses (assume white_player/black_player filled)
        const { data: gameData } = await supabase.from('games').select('white_player,black_player,white_player_id,black_player_id').eq('id', gameId).single();
        if (!gameData) return;
        console.log('[DEBUG] assignColors - gameData:', gameData, 'address:', address, 'myColor:', myColor);
        // Check if both players are being set to white
        if (address === gameData.white_player && myColor === 'w') {
          console.warn('[DEBUG] Attempting to set both players to white:', { address, gameData });
        }
        const update = {
          white_player: myColor === 'w' ? address : gameData.black_player,
          black_player: myColor === 'b' ? address : gameData.white_player,
          white_player_id: myColor === 'w' ? gameData.white_player_id : gameData.black_player_id,
          black_player_id: myColor === 'b' ? gameData.white_player_id : gameData.black_player_id,
          status: 'ready',
          assigned: true
        };
        console.log('[DEBUG] assignColors - update:', update);
        await supabase.from('games').update(update).eq('id', gameId);
        setAssignedColor(myColor);
      };
      assignColors();
    }
  }, [gameStatus, blackPlayer, opponentReady, ready, assignedColor, address, gameId]);

  // Countdown effect for game start when both ready and assigned
  useEffect(() => {
    if (gameStatus === 'ready' && assignedColor) {
      setCountdown(5); // 5 second countdown
      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(interval);
            setGameStatus('active');
            return null;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStatus, assignedColor]);

  async function makeAMove(move: { from: string; to: string; promotion?: string }) {
    if (gameStatus !== 'active') return;
    const gameCopy = new Chess(game.fen());
    console.log('[DEBUG] makeAMove - FEN before move:', game.fen(), 'Move:', move);
    const result = gameCopy.move(move);
    console.log('[DEBUG] makeAMove - FEN after move:', gameCopy.fen(), 'Move result:', result);
    // Detect capture
    if (result && result.captured) {
      setLastCaptured({ piece: result.captured, color: result.color === 'w' ? 'b' : 'w' });
      setCaptureAnim(true);
      setTimeout(() => setCaptureAnim(false), 2000);
    }
    setGame(gameCopy);
    if (result && gameId) {
      // Insert move into Supabase
      const moveCount = gameCopy.history().length;
      await supabase.from("moves").insert([
        {
          game_id: gameId,
          move_number: moveCount,
          move: result.san,
        },
      ]);
      // Switch active color and clock
      setActiveColor(gameCopy.turn() as 'w' | 'b');

      // BOT LOGIC: if black_player is BOT and it's now black's turn, make bot move
      if (
        blackPlayer === 'BOT' &&
        gameCopy.turn() === 'b' &&
        gameStatus === 'active'
      ) {
        setTimeout(async () => {
          const botGame = new Chess(gameCopy.fen());
          const legalMoves = botGame.moves();
          if (legalMoves.length) {
            // Pick a random move
            const botMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            botGame.move(botMove);
            // Insert bot move into Supabase
            const botMoveCount = botGame.history().length;
            await supabase.from("moves").insert([
              {
                game_id: gameId,
                move_number: botMoveCount,
                move: botMove,
              },
            ]);
            setGame(botGame);
            setActiveColor(botGame.turn() as 'w' | 'b');
          }
        }, 650); // Delay for realism
      }
    }
    return result;
  }

  // Handle timeout
  async function handleTimeout() {
    setGameStatus('timeout');
    if (gameId) {
      await supabase.from('games').update({ status: 'timeout' }).eq('id', gameId);
    }
  }

  if (isOverlayMode()) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
        <StreamerOverlay
          fen={game.fen()}
          whiteName="White"
          blackName="Black"
          whiteTime={whiteTime}
          blackTime={blackTime}
          status={gameStatus}
        />
      </div>
       );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'center',
      width: '100vw',
      background: 'var(--background)',
    }}>

      <div
        className="card"
        style={{
          padding: '2.5em 2em',
          background: 'var(--card-bg)',
          border: '1px solid var(--accent)',
          boxShadow: '0 0 24px #4f8cff33',
          width: '100%',
          maxWidth: 560,
          minWidth: 0,
          boxSizing: 'border-box',
        }}
        aria-label="Chess game area"
        tabIndex={0}
      >
        {lastCaptured && captureAnim && (
          <div style={{
            position: 'absolute',
            top: 24,
            left: 0,
            right: 0,
            margin: '0 auto',
            width: 80,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            fontSize: 64,
            opacity: captureAnim ? 1 : 0,
            transition: 'opacity 0.5s',
            pointerEvents: 'none',
            color: lastCaptured?.color === 'w' ? '#fff' : '#222',
            textShadow: '0 2px 8px #000',
          }}>
            {(() => {
              const pieceMap: Record<string, string> = {
                p: lastCaptured?.color === 'w' ? '♙' : '♟',
                n: lastCaptured?.color === 'w' ? '♘' : '♞',
                b: lastCaptured?.color === 'w' ? '♗' : '♝',
                r: lastCaptured?.color === 'w' ? '♖' : '♜',
                q: lastCaptured?.color === 'w' ? '♕' : '♛',
                k: lastCaptured?.color === 'w' ? '♔' : '♚',
              };
              return pieceMap[lastCaptured?.piece ?? ''] || '?';
            })()}
          </div>
        )}
        {gameId && (
          <div style={{marginBottom: '1em', color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: '1.1em'}}>
            Game ID: {gameId}
          </div>
        )}
        {gameStatus === 'waiting' && (
          <>
            <div style={{marginBottom: '1em', color: 'var(--accent)', fontWeight: 600, textAlign: 'center'}}>
              Waiting for an opponent to join...<br />
              Share this link: <span style={{fontFamily: 'var(--font-mono)'}}>{typeof window !== 'undefined' ? window.location.href : ''}</span>
            </div>
            <button
              style={{marginBottom: 24, width: '100%', background: '#ff4d4f', color: '#fff', fontWeight: 700, padding: '0.75em', borderRadius: 8, border: 'none', fontSize: '1.1em', cursor: redirecting ? 'not-allowed' : 'pointer', opacity: redirecting ? 0.7 : 1}}
              disabled={redirecting}
              onClick={async () => {
                if (!gameId) return;
                setRedirecting(true);
                await supabase.from('games').delete().eq('id', gameId);
                window.removeEventListener('beforeunload', () => {});
                window.location.href = '/lobby';
              }}
            >Leave Lobby</button>
            <div style={{marginTop: 24, textAlign: 'center'}}>
              <button
                style={{background: ready ? '#4caf50' : '#1976d2', color: '#fff', fontWeight: 700, padding: '0.75em', borderRadius: 8, border: 'none', fontSize: '1.1em', cursor: ready ? 'not-allowed' : 'pointer', opacity: ready ? 0.7 : 1, marginRight: 16}}
                disabled={ready}
                onClick={async () => {
                  if (!gameId) return;
                  // Set ready flag for this user
                  const readyField = (address === blackPlayer ? 'ready_black' : 'ready_white');
                  await supabase.from('games').update({ [readyField]: true }).eq('id', gameId);
                  setReady(true);
                }}
              >{ready ? 'Ready!' : 'I am Ready'}</button>
              <span style={{marginLeft: 8, color: opponentReady ? '#4caf50' : '#aaa', fontWeight: 600}}>
                {opponentReady ? 'Opponent Ready' : 'Waiting for Opponent'}
              </span>
            </div>
          </>
        )}
        {gameStatus === 'ready' && (
          <div style={{marginBottom: '1em', color: 'var(--accent)', fontWeight: 600, textAlign: 'center'}}>
            Both players are ready! Assigning colors and starting soon...
          </div>
        )}
        {typeof countdown === 'number' && countdown > 0 && (
          <div style={{marginBottom: '1em', color: 'var(--accent)', fontWeight: 600, textAlign: 'center'}}>
            Opponent joined! Game starting in {countdown} second{countdown !== 1 ? 's' : ''}...
          </div>
        )}
        {status === "connected" && address && (
          <div style={{color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: '1.1em', marginBottom: '1em'}}>
            Your Address: {address?.slice(0, 6) ?? ''}...{address?.slice(-4) ?? ''}
          </div>
        )}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 24, gap: 32}}>
        <div style={{textAlign: 'center'}}>
          <span style={{fontWeight: 700, color: 'var(--accent)'}}>White</span>
          <Clock
            initialSeconds={whiteTime}
            isRunning={activeColor === 'w' && gameStatus === 'active'}
            onTimeout={handleTimeout}
            keyProp={`white-${gameId}`}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          <span style={{fontWeight: 700, color: 'var(--accent)'}}>Black</span>
          <Clock
            initialSeconds={blackTime}
            isRunning={activeColor === 'b' && gameStatus === 'active'}
            onTimeout={handleTimeout}
            keyProp={`black-${gameId}`}
          />
        </div>
      </div>
      {moveError && (
        <div style={{
          color: '#fff',
          background: '#ff4d4f',
          padding: '0.5em 1em',
          borderRadius: 8,
          marginBottom: 10,
          fontWeight: 600,
          boxShadow: '0 2px 8px #ff4d4f55',
          zIndex: 20,
        }}>
          {moveError}
        </div>
      )}
      {infoBanner && (
        <div style={{
          color: '#fff',
          background: '#1976d2',
          padding: '0.5em 1em',
          borderRadius: 8,
          marginBottom: 10,
          fontWeight: 600,
          boxShadow: '0 2px 8px #1976d255',
          zIndex: 20,
        }}>
          {infoBanner}
        </div>
      )}
      {infoBanner && (
        <div style={{
          color: '#fff',
          background: '#1976d2',
          padding: '0.5em 1em',
          borderRadius: 8,
          marginBottom: 10,
          fontWeight: 600,
          boxShadow: '0 2px 8px #1976d255',
          zIndex: 20,
        }}>
          {infoBanner}
        </div>
      )}
      <div style={{marginBottom: 24}}>
        <Chessboard
          position={game.fen()}
          onPieceDrop={(source, target) => {
            if (gameStatus !== 'active' || countdown) {
              setMoveError('You cannot move: Game is not active.');
              setTimeout(() => setMoveError(null), 1200);
              return false;
            }
            const chess = new Chess(game.fen());
            const move = chess.move({ from: source, to: target, promotion: "q" });
            if (!move) {
              setMoveError('Illegal move!');
              setTimeout(() => setMoveError(null), 1200);
              return false;
            }
            setLastMoveSquares({ from: source, to: target });
            makeAMove({ from: source, to: target, promotion: "q" });
            return true;
          }}
          boardWidth={480}
          arePiecesDraggable={gameStatus === 'active' && !countdown && !!blackPlayer}
          customBoardStyle={{ borderRadius: 12, boxShadow: '0 0 24px #4f8cff33', transition: 'box-shadow 0.3s' }}
          animationDuration={250}
          boardOrientation={assignedColor === 'b' ? 'black' : 'white'}
          showBoardNotation={true}
          customSquareStyles={lastMoveSquares ? {
            [lastMoveSquares.from]: {
              background: 'radial-gradient(circle, #ffe082 70%, transparent 100%)',
            },
            [lastMoveSquares.to]: {
              background: 'radial-gradient(circle, #81d4fa 70%, transparent 100%)',
            },
          } : {}}

        />
      </div>
      <button
        style={{
          marginBottom: 24,
          width: '100%',
          background: 'var(--accent)',
          color: '#fff',
          fontWeight: 700,
          padding: '0.75em',
          borderRadius: 8,
          border: 'none',
          fontSize: '1.1em',
          cursor: gameStatus === 'active' ? 'pointer' : 'not-allowed',
          opacity: gameStatus === 'active' ? 1 : 0.5,
          outline: '2px solid transparent',
        }}
        disabled={gameStatus !== 'active'}
        aria-label="Forfeit game"
        tabIndex={0}
        onFocus={e => e.currentTarget.style.outline = '2px solid #4f8cff'}
        onBlur={e => e.currentTarget.style.outline = '2px solid transparent'}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click(); }}
        onClick={async () => {
          if (gameStatus !== 'active' || !gameId) return;
          await supabase.from('games').update({ status: 'forfeited' }).eq('id', gameId);
          setGameStatus('forfeited');
        }}
      >Forfeit</button>

      {/* On-chain result reporting */}
      {gameStatus === 'active' && (
        <div style={{marginBottom: 16, marginTop: 8, textAlign: 'center'}}>
          <button
            style={{background: '#4caf50', color: '#fff', fontWeight: 700, padding: '0.5em 1.5em', borderRadius: 8, border: 'none', fontSize: '1em', marginRight: 10}}
            onClick={async () => {
              if (!gameId || !window.ethereum) return;
              try {
                if (!isEip1193Provider(window.ethereum)) throw new Error('No EIP-1193 provider');
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = getEscrowContract(signer);
                // 1 = Player1Win, 2 = Player2Win, 3 = Draw
                // TODO: Determine winner based on chess.js state and address
                // For demo: prompt user
                const result = window.prompt('Enter result: 1=You win, 2=Opponent wins, 3=Draw');
                if (!result) return;
                const tx = await contract.reportResult(Number(gameId), Number(result));
                await tx.wait();
                alert('Result reported on-chain!');

              } catch (err) {
                alert('Failed to report result on-chain: ' + (err as Error).message);
              }
            }}
          >Report Result (On-chain)</button>
          <button
            style={{background: '#ff9800', color: '#fff', fontWeight: 700, padding: '0.5em 1.5em', borderRadius: 8, border: 'none', fontSize: '1em'}}
            onClick={async () => {
              if (!gameId || !window.ethereum) return;
              try {
                if (!isEip1193Provider(window.ethereum)) throw new Error('No EIP-1193 provider');
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = getEscrowContract(signer);
                const tx = await contract.raiseDispute(Number(gameId));
                await tx.wait();
                alert('Dispute raised on-chain!');

              } catch (err) {
                alert('Failed to raise dispute: ' + (err as Error).message);
              }
            }}
          >Raise Dispute (On-chain)</button>
        </div>
      )}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--foreground)', fontWeight: 600, textAlign: 'center', marginBottom: 6}}>
        <span style={{
          display: 'inline-block',
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: activeColor === 'w' ? '#fff' : '#222',
          border: '2px solid #4f8cff',
          marginRight: 8,
        }}></span>
        {gameStatus === 'active' ? (activeColor === 'w' ? 'White' : 'Black') + " to move" : `Game status: ${gameStatus}`}
      </div>
    </div>
  );
}