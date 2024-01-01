import React from 'react';

export default function Input({ label, id, error, ...props }) {
  return (
    <>
      <label htmlFor={id}>email</label>
      <input id={id} {...props} />
      {error && <p>{error}</p>}
    </>
  );
}
