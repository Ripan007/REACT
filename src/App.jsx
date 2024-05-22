import React, { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './Log';

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('x');
  function handleSelectSquare() {
    setActivePlayer(currActivePlayer => (currActivePlayer === 'x' ? 'o' : 'x'));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="x"
            isActive={activePlayer === 'x'}
          />
          <Player
            initialName="player2"
            symbol="o"
            isActive={activePlayer === 'o'}
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
