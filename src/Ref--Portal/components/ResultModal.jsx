import React from 'react';

export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open>
      <h1>you {result}</h1>
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
  );
}
