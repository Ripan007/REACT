import React from 'react';
import Players from './components/Players';
import TimeChallenge from './components/TimeChallenge';

export default function App() {
  return (
    <div>
      <Players />
      <div id="challenges">
        <TimeChallenge title="easy" targetTime={1}/>
        <TimeChallenge title="not easy" targetTime={2}/>
        <TimeChallenge title="getting tough" targetTime={3}/>
        <TimeChallenge title="pros only" targetTime={4}/>
      </div>
    </div>
  );
}


//  to  become a  confident developer 