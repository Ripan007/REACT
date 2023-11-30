import React from 'react';
import { useState } from 'react';

function Practice() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = value => {
    if (!value) {
      setEmailError('email is required');
    }
  }else if(!/\S+@\S+\.\S+/.test(value))

  return <div>Practice</div>;
}

export default Practice;
