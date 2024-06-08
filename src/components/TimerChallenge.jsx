import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    function handleStart() {
        timer.current = setInterval(() => {}, 10)
        setTimerStarted(true)
    }
    function handleStop() {
        clearTimeout(timer.current)
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'stop' : 'start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'time running' : 'timer is inActive'}
                </p>
            </section>
        </>
    )
}

//  passing prop from one component to another using forward ref
