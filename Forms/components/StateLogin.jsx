import React, { useRef } from 'react';

export default function Login() {
  const email = useRef();
  const passWord = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const currentEmail = e.target.value;
    const currentPassword = e.target.value;

    console.log(currentEmail, currentPassword);
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={email} />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" ref={passWord} />
        </div>
        <p className="form-actions">
          <button className="button button-flat">reset</button>
          <button className="button">login</button>
        </p>
      </div>
    </form>
  );
}

/**
 * * DISADVANTAGE:
 * * two many ref
 * * reset is daunting
 * */
