import React from 'react'

export default function GameOver({ winner }) {
    return (
        <div id="game-over">
            <h2>game over</h2>
            <p>{winner} won</p>
            <p>
                <button>rematch</button>
            </p>
        </div>
    )
}
