import React from 'react';

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  function submitHandler(e) {
    e.preventDefault();
    console.log('clicked');
  }
  function handleInputEmail(e) {
    setEnteredEmail(e.target.value);
  }

  function handlePasswordInput(e) {}
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
            onChange={handleEmailInput}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            onchange={handlePasswordInput}
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
