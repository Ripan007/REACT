import React from 'react'

export default function SignUp() {

    function submitHandler(event){
        event.preventDefault()
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);

    }
  return (
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='first name' name='name' />
        <input type="email" placeholder='enter email' name='email' />
        <input type="text" placeholder='last  name' name='last name' />
        <button>submit</button>
    </form>
  )
}
