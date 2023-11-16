import Player from "./components/Player";

export default function TicApp() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1 " symbol="x" />
          <Player name="player 2" symbol="o" />
        </ol>
        game board
      </div>
      game logic
    </main>
  );
}
