import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './components/GameOver'
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
    const [player, setPlayers] = useState({
        x: 'player x',
        o: 'player o',
    })
    const [gameTurns, setGameTurns] = useState([])
    const activePlayer = deriveActivePlayer(gameTurns)
    let gameBoard = [...initialGameBoard.map(array => [...array])]
    for (const turn of gameTurns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }
    let winner

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
            winner = players[]
        }
    }
    const hasDraw = gameTurns.length === 9 && !winner
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
    function handleRestart() {
        setGameTurns([])
    }
    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            }
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
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialName="player 2"
                        symbol="o"
                        isActive={activePlayer === 'o'}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && (
                    <GameOver winner={winner} onRestart={handleRestart} />
                )}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}
