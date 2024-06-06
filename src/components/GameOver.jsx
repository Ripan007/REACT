import React from 'react'

export default function GameOver({ winner }) {
    return (
        <div id="game-over">
            <h2>game over</h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p>It&apos; a draw</p>}
            <p>
                <button>rematch</button>
            </p>
        </div>
    )
}
