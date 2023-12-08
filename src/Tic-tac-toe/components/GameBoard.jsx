export default function GameBoard({ onSelectSquare, board }) {
  /*  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard(prevGameBoard => {
      const updatedBoard = [
        ...prevGameBoard.map(innerArray => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }*/

  return (
    <ol id="game-board" style={{ display: 'flex', listStyle: 'none' }}>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li style={{ listStyle: 'none' }} key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  style={{ width: '50px', height: '50px', margin: '2px' }}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {' '}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
