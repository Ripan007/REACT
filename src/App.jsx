import React from 'react';
import Players from './components/Players';
import TimeChallenge from './components/TimeChallenge';

export default function App() {
  return (
    <div>
      <Players />
      <div id="challenges">
        <TimeChallenge title="easy" TimeChallenge={5}/>
        <TimeChallenge title="not easy" TimeChallenge={10}/>
        <TimeChallenge title="getting tough" TimeChallenge={5}/>
        <TimeChallenge title="pros only" TimeChallenge={5}/>
      </div>
    </div>
  );
}
