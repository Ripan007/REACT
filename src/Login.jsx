import React, { useRef } from 'react';

export default function Login() {
  const email = useRef();
  const password = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = email.current.value
    const eneteredPassword  = password.current.value

    console.log(enteredEmail,eneteredPassword);
    email.current.value = ''
    password.current.value =  ''
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <input type="text" placeholder="enter email" name="email"  ref={email}/>
        <label htmlFor="password">password</label>
        <input type="password" name="password" ref ={password} />
        <button>submit</button>
      </form>
    </>
  );
}


//  disadvantage => two many ref  , empty the input text is not clear