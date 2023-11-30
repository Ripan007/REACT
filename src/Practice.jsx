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

  return <div>Practice</div>;
}

export default Practice;
