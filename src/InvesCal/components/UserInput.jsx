import React from 'react';

export default function UserInput() {
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
