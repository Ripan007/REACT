import React from 'react';

export default function UserInput() {
  return (
    <section id=" user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial investment</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">annual investment</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">expected return</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input type="text" />
        </p>
      </div>
    </section>
  );
}
