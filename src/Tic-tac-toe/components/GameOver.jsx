import React from 'react';

export const GameOver = ({ winner }) => {
  return (
    <div>
      <h2>game over</h2>
      {winner && <p>{winner}won</p>}
      {!winner && <p>its draw</p>}

      <p>
        <button>rematch</button>
      </p>
    </div>
  );
};
