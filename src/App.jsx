import React from 'react'
import Player from './components/Player'
import PlayerRef from './components/PlayerRef'
import TimerChallenge from './components/TimerChallenge'

export default function App() {
    return (
        <>
            <PlayerRef />
            <div id="challenges">
                <TimerChallenge title="easy" targetTime={1} />
                <TimerChallenge title="not easy" targetTime={5} />
                <TimerChallenge title="getting tough" targetTime={10} />
                <TimerChallenge title="pros only" targetTime={15} />
            </div>
        </>
    )
}
