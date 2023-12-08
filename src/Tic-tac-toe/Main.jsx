import React, { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function Main() {
  const [gameTurns, setGameTurns] = useState([]);
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  // const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer(currActivePlayer => (currActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default Main;

// MINDSET //
//  avoid getting distracted , focus on grasping as much as can , become a better programmer //
