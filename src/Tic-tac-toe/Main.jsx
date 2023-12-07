import React from 'react';

function Main() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="players-name">player 1</span>
            <span className="players-symbol">X</span>
          </li>
          <li>
            <span className="players-name">player 2</span>
            <span className="players-symbol">O</span>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default Main;

// MINDSET //
