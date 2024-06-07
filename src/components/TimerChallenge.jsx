import React, { useState } from 'react'

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    let timer
    function handleStart() {
        timer = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }
    function handleStop() {
        clearTimeout(timer)
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
                {timerStarted ? 'time running' : 'timer is inActive'}
            </p>
        </section>
    )
}
