import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'x'
    if (gameTurns.length > 0 && gameTurns[0].player === 'x') {
        currentPlayer = 'o'
    }
    return currentPlayer
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([])
    const activePlayer = deriveActivePlayer(gameTurns)
    let gameBoard = initialGameBoard
    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column]
        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
        }
    }
    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns)
            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ]
            return updatedTurns
        })
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="player 1"
                        symbol="x"
                        isActive={activePlayer === 'x'}
                    />
                    <Player
                        initialName="player 2"
                        symbol="o"
                        isActive={activePlayer === 'o'}
                    />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}
