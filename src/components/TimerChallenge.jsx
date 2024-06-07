import React, { useState } from 'react'

export default function TimerChallenge({ title, targetTime }) {
    const[timerStarted,se]
    const [timerExpired, setTimerExpired] = useState(false)
    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>you lost</p>}
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>start challenge</button>
            </p>
            <p>time running / .. timer is inactive</p>
        </section>
    )
}
