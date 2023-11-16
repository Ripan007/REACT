export default function GameOver({ winner, onRestart }) {
  return (
    <div className="game-over">
      <h2>game over</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>its a draw</p>}
      <p>
        <button onClick={onRestart}>rematch</button>
      </p>
    </div>
  );
}
