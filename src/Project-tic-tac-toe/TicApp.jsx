export default function TicApp() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">player 1</span>
            <span className="player-symbol">0</span>
          </li>
          <li>
            <span className="player-name">player 2</span>
            <span className="player-symbol">x</span>
          </li>
        </ol>
        game board
      </div>
      game logic
    </main>
  );
}
