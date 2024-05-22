import React from 'react';
import Player from './components/Player';

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player1" symbol="x" />
          <Player name="player2" symbol="o" />
        </ol>
        game boards
      </div>
      logic
    </main>
  );
}
