import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000
    if (timeRemaining <= 0) {
        clearImmediate(timer.current)
        setTimeRemaining(targetTime * 1000)
        dialog.current.open()
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)
        setTimerStarted(true)
    }
    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
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
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'stop' : 'start'} challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'time running' : 'timer is inActive'}
                </p>
            </section>
        </>
    )
}

//  passing prop from one component to another using forward ref
