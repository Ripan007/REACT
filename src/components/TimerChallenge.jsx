import React from 'react'

export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>start challenge</button>
            </p>
            <p>time running / .. timer is inactive</p>
        </section>
    )
}
