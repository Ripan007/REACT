import React, { useState } from 'react';
import Input from './Input';

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function inputHandleChange(identifier, value) {
    setEnteredValues(prevValues => ({ ...prevValues, [identifier]: value }));
    setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: false }));
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: true }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(enteredValues);
    setEnteredValues({
      email: '',
      password: '',
    });
  }

  const emailIsInValid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInValid = didEdit.password ;
  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          label="email"
          name="email"
          id="email"
          type="email"
          onBlur={() => handleInputBlur('email')}
          value={enteredValues.email}
          onChange={event => inputHandleChange('email', event.target.value)}
          error={emailIsInValid && 'email is invalid'}
        />
        <br />

        <Input
          label="password"
          name="password"
          id="password"
          type="password"
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password}
          onChange={event => inputHandleChange('password', event.target.value)}
          error={passwordIsInValid && 'show this  line'}
        />

        <button>submit</button>
      </form>
    </>
  );
}
