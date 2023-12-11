import React, { useState } from 'react';

export default function Login() {
  const [showUsers, setShowUsers] = useState({
    email: '',
    password: '',
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
  function handleChangeUsers(identifier, value) {
    setShowUsers(prevUsers => {
      ({ ...prevUsers, [identifier]: value });
    });
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
            value={showUsers.email}
            onChange={e => handleChangeUsers('email', e.target.value)}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={showUsers.password}
            onChange={e => handleChangeUsers('password', e.target.value)}
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
