import React from 'react';
import { useState } from 'react';

function Practice() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = value => {
    if (!value) {
      setEmailError('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Email is invalid.');
    } else {
      setEmailError('');
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isValid = validateEmail(email);
    if (isValid) {
      // Submit form
    }
  };
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      {emailError && <div className="error">{emailError}</div>}
    </div>
  );
}

export default Practice;
