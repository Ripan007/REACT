import React from 'react';

export const GameOver = ({ winner, onRestart }) => {
  return (
    <div>
      <h2>game over</h2>
      {winner && <p>{winner}won</p>}
      {!winner && <p>its draw</p>}

      <p>
        <button onClick={onRestart}>rematch</button>
      </p>
    </div>
  );
};
