import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal(
    { targetTime, remainingTime, onReset },
    ref
) {
    const dialog = useRef()
    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / targetTime) * 1000)
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            },
        }
    })
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>you lost</h2>}

            <p>
                the target time was <strong>{targetTime}</strong>seconds
            </p>
            <p>
                you stop the timer with
                <strong>{formattedRemainingTime} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>
        </dialog>
    )
})
export default ResultModal
