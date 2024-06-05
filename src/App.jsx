import Player from './components/Player'

export default function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="player 1" symbol="x" />
                    <Player initialName="player 2" symbol="o" />
                </ol>
            </div>
        </main>
    )
}
