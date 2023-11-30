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
      <label>email</label>
      <input
        type="email"
        name=""
        id=""
        onChange={() => setEmail(e.target.value)}
      />
    </form>
  );
}

export default Practice;
