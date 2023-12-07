import React, { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import './App.css';

function Main() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer(currActivePlayer => (currActivePlayer === 'X' ? 'O' : 'X'));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      game logic
    </main>
  );
}

export default Main;

// MINDSET //
