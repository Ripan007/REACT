import React, { forwardRef } from 'react'

const ResultModal = forwardRef(function ResultModal(
    { result, targetTime },
    ref
) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>you {result}</h2>
            <p>
                the target time was <strong>{targetTime}</strong>seconds
            </p>
            <p>
                you stop the timer with <strong>x seconds left</strong>
            </p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    )
})
export default ResultModal
