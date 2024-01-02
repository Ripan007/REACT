import React, { useState } from 'react';

let timer;
export default function TimeChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>you lost !</p>}
      <p className="challenge-time">
        {targetTime} seconds {targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>

          {timerStarted ? 'stop' : 'start'}challenge
        </button>
      </p>
      <p className={timerStarted ? handleStop : handleStart}>
        {timerStarted ? 'time is running' : 'time is inactive'}
      </p>
    </section>
  );
}


