import React from 'react';

export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">player1</span>
        <span className="player-symbol">x</span>
        <button>edit</button>
      </span>
    </li>
  );
}
