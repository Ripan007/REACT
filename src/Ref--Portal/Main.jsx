import React from 'react';
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

export default function Main() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge />
      </div>
    </>
  );
}
