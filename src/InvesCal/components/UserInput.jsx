import React, { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });

  function handleChange() {}
  return (
    <section>
      <div>
        <p>
          <label>initial investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>annual investment</label>
          <input type="number" required />
        </p>
      </div>
      <div>
        <p>
          <label>expected return</label>
          <input type="number" required />
        </p>
        <p>
          <label>return</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
