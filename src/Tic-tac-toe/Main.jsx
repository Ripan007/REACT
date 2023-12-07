import React from 'react';
import Player from './components/Player';

function Main() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        game board
      </div>
      game logic
    </main>
  );
}

export default Main;

// MINDSET //
