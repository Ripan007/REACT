import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'

export default function App() {
    const [activePlayer, setActivePlayer] = useState('x')
    function handleSelectSquare() {
        setActivePlayer(currActivePlayer =>
            currActivePlayer === 'x' ? 'o' : 'x'
        )
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="">
                    <Player initialName="player 1" symbol="x" />
                    <Player initialName="player 2" symbol="o" />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
            </div>
        </main>
    )
}
