import React, { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    let show
    if (!isEditing) {
    }
    function handleClick() {
        setIsEditing(true)
    }
    return (
        <li>
            <span className="player">
                {show}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>edit</button>
            </span>
        </li>
    )
}
