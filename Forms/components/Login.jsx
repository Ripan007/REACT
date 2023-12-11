import React from 'react';

export default function Login() {
  return (
    <form>
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
      </div>
    </form>
  );
}
