import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <>
      <div ref={ref} className="result-modal" open>
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
      </div>
    </>
  );
});
export default ResultModal;
