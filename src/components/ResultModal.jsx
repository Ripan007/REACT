import React, { forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  useImperativeHandle(ref, () => {
    return {
      open() {},
    };
  });
  return (
    <>
      <dialog ref={ref} className="result-modal" open>
        <h2>you {result}</h2>
        <p>
          the target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          you stopped the timer with <strong>x seconds left</strong>
        </p>
        <form method="dialog">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
});
export default ResultModal;
