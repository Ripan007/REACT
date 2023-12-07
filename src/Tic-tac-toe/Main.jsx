import React, { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function Main() {
  const [gameTurns, setGameTurns] = useState([]);
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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default Main;

// MINDSET //
//  avoid getting distracted , focus on grasping as much as can , become a better programmer //
