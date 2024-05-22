import React, { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  let show;
  if (!isEditing) {
    show = <span className="player-name">{name}</span>;
  }

  return (
    <li>
      <span className="player">
        {show}
        <span className="player-symbol">{symbol}</span>
        <button>edit</button>
      </span>
    </li>
  );
}
