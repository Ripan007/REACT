import React from 'react'

export default function GameOver({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>game over</h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p>It&apos; a draw</p>}
            <p>
                <button onClick={onRestart}>rematch</button>
            </p>
        </div>
    )
}
