const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>{playerSymbol}</li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
