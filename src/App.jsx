import Player from './components/Player'

export default function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player />
                </ol>
            </div>
        </main>
    )
}
