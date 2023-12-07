import React from 'react';

function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
        <button>edit</button>
      </span>
    </li>
  );
}

export default Player;
