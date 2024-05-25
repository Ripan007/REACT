import React from 'react';

export default function ResultModal({ result, targetTime }) {
  return (
    <>
      <dialog>
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
}
