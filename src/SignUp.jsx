import React from 'react'

export default function SignUp() {

    function submitHandler(event){
        event.preventDefault()

        const fd = new FormData();
        const data = fd.fromEnteries(fd.entries);
        lconsole.log(data);

    }
  return (
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter name' />
        <input type="email" placeholder='enter email' />
        <button>submit</button>
    </form>
  )
}
