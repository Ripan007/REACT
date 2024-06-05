import React from 'react'

export default function Player({ player, symbol }) {
    return (
        <li>
            <span className="player">
                <span className="player-name">{player}</span>
                <span className="player-symbol">{symbol}</span>
                <button>edit</button>
            </span>
        </li>
    )
}
