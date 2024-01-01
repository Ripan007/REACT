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

  const emailIsNotValid = didEdit.email && !enteredValues.email.includes('@');
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
        />

        <button>submit</button>
        {emailIsNotValid && <p style={{ color: 'red' }}>show errohhhhhr</p>}
      </form>
    </>
  );
}
