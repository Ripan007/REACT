import React, { useState } from 'react'

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>you lost</p>}
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'stop' : 'start'} challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timer}
                time running / .. timer is inactive
            </p>
        </section>
    )
}
