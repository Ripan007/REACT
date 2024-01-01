import React ,{useState} from 'react'

export default function SignUp() {
const [passwordAreNotEqual,setPasswordAreNotEqual] = useState(false)
    function submitHandler(event){
        event.preventDefault()
        const fd = new FormData(event.target);
        const acquisitionChannel = fd.getAll('acquisition');
        const data = Object.fromEntries(fd.entries());
        data.acquisition = acquisitionChannel;
        console.log(data);
        // event.target.reset()
    if(data.password !== data['conform-password']){
        setPasswordAreNotEqual(true)
    }else if(data.password === data['conform-password']){
        setPasswordAreNotEqual(false)
    }

    }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="first name" name="name" />
      <input type="email" placeholder="enter email" name="email" />
      <input type="text" placeholder="last  name" name="last name" />
      <input type="password" name='password' placeholder='enter password' required minLength={4} />
      <input type="password" name='conform-password' placeholder='enter conform password' />
      {passwordAreNotEqual && <p>password are not matched</p>}
      <fieldset>
        <legend>how do you find us</legend>
        <input type="checkbox" name="acquisition" value='google' />
        <label htmlFor="">google</label>
        <input type="checkbox" name="acquisition" value='friend'/>
        <label htmlFor="">friends</label>
      </fieldset>
      <button>submit</button>
      <button type='reset'>reset</button>
    </form>
  );
}
