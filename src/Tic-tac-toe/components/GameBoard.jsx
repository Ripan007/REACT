const initilalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  return (
    <ol id="game-board">
      {initilalBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol></ol>
        </li>
      ))}
    </ol>
  );
}
