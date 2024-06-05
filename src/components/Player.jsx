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
    setPlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        setPlayerName = (
            <input type="text" value={playerName} onChange={handleChange} />
        )
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>
                    {isEditing ? 'save' : 'edit'}
                </button>
            </span>
        </li>
    )
}
