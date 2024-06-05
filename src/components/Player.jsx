import React, { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    let playerName = <span className="player-name">{name}</span>
    if (isEditing) {
        playerName = <input type="text" value={name} />
    }
    function handleEditClick() {
        setIsEditing(true)
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>edit</button>
            </span>
        </li>
    )
}
