import React from 'react';

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">player1</span>
              <span className="player-symbol">x</span>
              <button>edit</button>
            </span>
          </li>
          <li>
            <span className="player">
              <span className="player-name">player2</span>
              <span className="player-symbol">o</span>
              <button>edit</button>
            </span>
          </li>
        </ol>
        game boards
      </div>
      logic
    </main>
  );
}
