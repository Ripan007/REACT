import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log'
function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'x'
    if (prevTurns.length > 0 && prevTurns[0].player === 'x') {
        currentPlayer = 'o'
    }
    return currentPlayer
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([])
    // const [activePlayer, setActivePlayer] = useState('x')

    let currentPlayer = 'x'
    if (prevTurns.length > 0 && prevTurns[0].player === 'x') {
        currentPlayer = 'o'
    }
    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer(currActivePlayer =>
        //     currActivePlayer === 'x' ? 'o' : 'x'
        // )
        setGameTurns(prevTurns => {
            let currentPlayer = 'x'
            if (prevTurns.length > 0 && prevTurns[0].player === 'x') {
                currentPlayer = 'o'
            }
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
                    activePlayerSymbol={activePlayer}
                    turns={gameTurns}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}
