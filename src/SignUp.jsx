import React from 'react'

export default function SignUp() {

    function submitHandler(event){
        event.preventDefault()
        const fd = new FormData(event.target);
        const acquisitionChannel = fd.getAll('acquisition');
        data.acquisition = acquisitionChannel;
        const data = Object.fromEntries(fd.entries());
        console.log(data);

    }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="first name" name="name" />
      <input type="email" placeholder="enter email" name="email" />
      <input type="text" placeholder="last  name" name="last name" />
      <fieldset>
        <legend>how do you find us</legend>
        <input type="checkbox" name="acquisition" value='google' />
        <label htmlFor="">google</label>
        <input type="checkbox" name="acquisition" value='friend'/>
        <label htmlFor="">friends</label>
      </fieldset>
      <button>submit</button>
    </form>
  );
}
