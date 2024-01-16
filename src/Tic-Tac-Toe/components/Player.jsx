import React, { useState } from 'react';

export default function Player({ symbol, initialPlayerName ,isActive ,onChangeName }) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEdit, setIsEdit] = useState(false);
  function handleEditClick() {
    setIsEdit(prevEdit => !prevEdit);
    if(isEdit){
        onChangeName(symbol, playerName);

    }

  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEdit) {
    editablePlayerName = (
      <input
        type="text"
        placeholder="enter playerName"
        value={playerName}
        onChange={handleChange}
      />
    );
  }
  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEdit ? 'save' : 'edit'}</button>
      </span>
    </li>
  );
}


