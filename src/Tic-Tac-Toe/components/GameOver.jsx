import React from 'react'

export default function GameOver({winner,onRestart}) {
  return (
    <div id='game-over'>
        <h2>gameover</h2>
        {winner && <p>{winner} winner</p>}
        {!winner && <p>match draw</p>}
        <p>
            <button onClick={onRestart}>rematch</button>
        </p>
    </div>
  )
}

