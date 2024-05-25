import React, { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <>
      <dialog ref={ref} className="result-modal" open>
        <h2>you {result}</h2>
        <p>
          the target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          you stopped the timer with <strong>x seconds left</strong>
          <form method="dialog">
            <button>close</button>
          </form>
        </p>
      </dialog>
    </>
  );
});
export default ResultModal;
