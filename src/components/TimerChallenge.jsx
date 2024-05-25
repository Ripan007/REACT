import React from 'react';

export default function TimerChallenge({ title, targetTime }) {
  function handleStart() {
    setTimeout(() => {}, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button> start challenge</button>
      </p>
      <p>time is running /...time is inactive</p>
    </section>
  );
}
