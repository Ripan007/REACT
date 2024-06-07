import React from 'react'

export default function ResultModal({ result, targetTime }) {
    return (
        <dialog>
            <h2>you {result}</h2>
            <p>
                the target time was <strong>{targetTime}</strong>seconds
            </p>
            <p>
                you stop the timer with <strong></strong>
            </p>
        </dialog>
    )
}
