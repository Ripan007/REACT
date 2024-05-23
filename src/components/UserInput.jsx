import React, { useState } from 'react';

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={event =>
              handleChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={event =>
              handleChange('annualInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={event =>
              handleChange('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={event => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
