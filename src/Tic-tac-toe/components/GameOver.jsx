import React from 'react';

export const GameOver = ({ winner }) => {
  return (
    <div>
      <h2>game over</h2>
      <p>{winner}won</p>
      <p>
        <button>rematch</button>
      </p>
    </div>
  );
};
