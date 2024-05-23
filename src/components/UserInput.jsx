import React, { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial investment</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">annual investment</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">expected return</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
