import React from 'react';

export default function Input() {
  return (
    <>
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="text"
        name="email"
        onBlur={() => handleInputBlur('email')}
        value={enteredValues.email}
        onChange={event => inputHandleChange('email', event.target.value)}
      />
    </>
  );
}
