import React, { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function Main() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer(currActivePlayer => (currActivePlayer === 'X' ? 'O' : 'X'));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === 'X'}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
      game logic
    </main>
  );
}

export default Main;

// MINDSET //
