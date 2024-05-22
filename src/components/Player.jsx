import React, { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(true);

  let show;
  if (isEditing) {
    show = <span className="player-name">{name}</span>;
  } else {
    show = <span className="player-symbol">{symbol}</span>;
  }

  return (
    <li>
      <span className="player">
        {show}

        <button>edit</button>
      </span>
    </li>
  );
}
