import React, { useState } from 'react';

export default function App() {
  const [enteredValues, setEnteredValues] = useState({
    name: '',
    password: '',
  });

  function inputHandleChange(identifier, value) {
    setEnteredValues(prevValues => ({ ...prevValues, [identifier]: value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(enteredValues);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          placeholder="enter email"
          name="email"
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
      </form>
    </>
  );
}
