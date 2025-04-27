import { Chessboard } from "react-chessboard";

interface StreamerOverlayProps {
  fen: string;
  whiteName: string;
  blackName: string;
  whiteTime: number;
  blackTime: number;
  status: string;
}

export default function StreamerOverlay({ fen, whiteName, blackName, whiteTime, blackTime, status }: StreamerOverlayProps) {
  function formatTime(sec: number) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
  return (
    <div className="bg-black bg-opacity-60 rounded-lg p-4 flex flex-col items-center w-fit">
      <div className="flex justify-between w-full mb-2">
        <span className="text-white font-bold">{whiteName} ({formatTime(whiteTime)})</span>
        <span className="text-white font-bold">{blackName} ({formatTime(blackTime)})</span>
      </div>
      <Chessboard
        position={fen}
        boardWidth={400}
        arePiecesDraggable={false}
        boardOrientation="white"
      />
      {status !== 'active' && (
        <div className="mt-2 text-lg text-red-400">Game Over: {status}</div>
      )}
    </div>
  );
}
