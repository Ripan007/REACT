import React, { useState } from 'react';

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
        <label htmlFor="email">email</label>
        <input
          type="text"
          placeholder="enter email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          value={enteredValues.email}
          onChange={event => inputHandleChange('email', event.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={enteredValues.password}
          onChange={event => inputHandleChange('password', event.target.value)}
        />
        <button>submit</button>
        {emailIsNotValid && <p style={{ color: 'red' }}>show error</p>}
      </form>
    </>
  );
}
