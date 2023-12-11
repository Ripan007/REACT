import React, { useState } from 'react';

export default function Login() {
  const [showUsers, setShowUsers] = useState({
    email,
    password,
  });
  /* const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('')
    function handleEmailInput(e) {
    setEnteredEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setEnteredPassword(e.target.value);
  }

  */
  function submitHandler(e) {
    e.preventDefault();
    console.log(enteredEmail, enteredPassword);
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={enteredEmail}
            onChange={handleEmailInput}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={enteredPassword}
            onChange={handlePasswordInput}
          />
        </div>
        <p className="form-actions">
          <button className="button button-flat">reset</button>
          <button className="button">login</button>
        </p>
      </div>
    </form>
  );
}
