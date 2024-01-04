import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimeChallenge({ title, targetTime }) {
  let timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section  style={{color:'#fff'}}className="challenge">
      <h2>{title}</h2>
      {timerExpired &&  <ResultModal targetTime={targetTime} result={'lost'}/>}
      {/* {timerExpired && <p>you lost !</p>} */}
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


