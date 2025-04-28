import React from "react";

const BotPlayButton: React.FC<{ onPlay: () => void }> = ({ onPlay }) => (
  <button
    onClick={onPlay}
    style={{background:'var(--accent-2)',color:'#0d1117',fontWeight:600,padding:'8px 20px',borderRadius:6,margin:'8px 0'}}
    aria-label="Play vs Bot"
    title="Play a game against a computer bot"
  >
    🤖 Play vs Bot
  </button>
);

export default BotPlayButton;
