import React, { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty } from './validation';
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

  const emailIsInValid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);
  const passwordIsInValid =
    didEdit.password && enteredValues.password.trim().length < 6;
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
        <br /> <br />
        <button>submit</button>
      </form>
    </>
  );
}
