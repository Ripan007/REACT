import React from 'react';

export default function TimeChallenge({ title, targetTime }) {
  return (
    <section>
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} seconds {targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button>start challenge</button>
      </p>
      <p>
        time is  running / time is inactive
      </p>
    </section>
  );
}
