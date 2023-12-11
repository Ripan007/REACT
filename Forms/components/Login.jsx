import React from 'react';

export default function Login() {
  function submitHandler(e) {
    e.preventDefault();
    console.log('clicked');
  }
  return (
    <form onSubmit={submitHandler}>
      <h2>login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
        </div>
        <p className="form-actions">
          <button className="button button-flat">reset</button>
          <button className="button">login</button>
        </p>
      </div>
    </form>
  );
}
