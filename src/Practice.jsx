import React from 'react';
import { useState } from 'react';

function Practice() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>email:</label>
      <input
        type="email"
        name=""
        id=""
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label>password:</label>
      <input
        type="password"
        name=""
        id=""
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default Practice;
