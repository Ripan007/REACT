import React from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="x" />
          <Player initialName="player2" symbol="o" />
        </ol>
        <GameBoard />
      </div>
      logic
    </main>
  );
}
