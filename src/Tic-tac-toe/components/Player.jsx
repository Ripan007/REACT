import React, { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleEdit() {
    setIsEditing(false);
  }

  let show = <span className="player-name">{name}</span>;
  if (isEditing) {
    show = <input type="text" />;
  }
  return (
    <li>
      <span className="player">
        {show}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>edit</button>
      </span>
    </li>
  );
}

export default Player;
