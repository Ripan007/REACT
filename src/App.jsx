import React, { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './Log';

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('x');
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer(currActivePlayer => (currActivePlayer === 'x' ? 'o' : 'x'));
    setGameTurns(prevTurns => {
      let currentPlayer = 'x';
      if (prevTurns.length > 0 && prevTurns[0].player === 'x') {
        currentPlayer = 'o';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
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
