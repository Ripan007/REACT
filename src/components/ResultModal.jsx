import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal(
    { result, targetTime, remainingTime },
    ref
) {
    const dialog = useRef()
    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            },
        }
    })
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>you {result}</h2>}

            <p>
                the target time was <strong>{targetTime}</strong>seconds
            </p>
            <p>
                you stop the timer with
                <strong>{formattedRemainingTime} seconds left</strong>
            </p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    )
})
export default ResultModal
