import React, { useState } from 'react';

export default function Login() {
  const [showUsers, setShowUsers] = useState({
    email: '',
    password: '',
  });

  function submitHandler(e) {
    e.preventDefault();
  }

  function onChangeHandler(identifier, value) {
    console.log('show value', value);
    setShowUsers(prevUsers => ({
      ...prevUsers,
      [identifier]: value,
    }));
  }

  const emailIsNotValid =
    showUsers.email !== '' && showUsers.email.includes('@');
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
            onChange={e => onChangeHandler('email', e.target.value)}
          />
        </div>
        <div className="control-error"></div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={showUsers.password}
            onChange={e => onChangeHandler('password', e.target.value)}
          />
        </div>
        <div className="control-error">
          {emailIsNotValid && <p>email is invalid</p>}
        </div>
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            reset
          </button>
          <button type="submit" className="button">
            login
          </button>
        </p>
      </div>
    </form>
  );
}
