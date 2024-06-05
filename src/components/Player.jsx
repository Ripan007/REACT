import React, { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    function handleClick() {
        let show;
        if (!show) {
            show = <span className="player-name">{name}</span>
        } else {
            show =
        }
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
