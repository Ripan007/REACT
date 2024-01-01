import React, { useRef } from 'react';

export default function Login() {
    const [emailISValid,setEmailISValid] = useState(false)
  const email = useRef();
  const password = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = email.current.value
    const eneteredPassword  = password.current.value

    console.log(enteredEmail,eneteredPassword);


    const emailIsValid = enteredEmail.includes('@')
    if(!emailIsValid){
        setEmailISValid(true)

    }
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


