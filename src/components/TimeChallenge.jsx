import React, { useState } from 'react';

export default function TimeChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop(){
    
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
          {' '}
          {timerStarted ? 'stop' : 'start'}challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'time is running' : 'time is inactive'}
      </p>
    </section>
  );
}

