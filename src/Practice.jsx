import React from 'react';
import { useState } from 'react';

function Practice() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>email:</label>
      <input
        type="email"
        name=""
        id=""
        value={email}
        onChange={() => setEmail(e.target.value)}
      />
      <label>password:</label>
      <input
        type="password"
        name=""
        id=""
        onChange={e => setPassword(e.target.value)}
      />
    </form>
  );
}

export default Practice;
