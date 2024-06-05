import React, { useState } from 'react'

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    function handleEditClick() {
        setIsEditing(editing => !editing)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = (
            <input type="text" value={playerName} onChange={handleChange} />
        )
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>
                    {isEditing ? 'save' : 'edit'}
                </button>
            </span>
        </li>
    )
}

// i have  to spend more time on thinking rather  than other  th