import React, { useState } from 'react';

export default function UserInput({ onChange, userInput }) {
  return (
    <section>
      <div>
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={e => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={e => onChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div>
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={e => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>return</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={e => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
