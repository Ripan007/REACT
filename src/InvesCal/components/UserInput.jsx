import React, { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(PrevUserInput => {
      return {
        ...PrevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <section>
      <div>
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={e => handleChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={e => handleChange('annualInvestment', e.target.value)}
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
            onChange={e => handleChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>return</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={e => handleChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
