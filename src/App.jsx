import React from 'react';

export default function App() {

  function submitHandler(event){
    event.preventDefault()

  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <input type="text" placeholder="enter email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" />
        <button>submit</button>
      </form>
    </>
  );
}


