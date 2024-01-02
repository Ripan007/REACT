import React, { useState } from 'react';

export default function Players() {
    const [getValues,setGetValues] = useState('')
    const [show,setShow]= useState('')

    function getUserInput(event){
        setGetValues(event.target.value)

    }

    function displayData(){
        setShow(getValues)
    }
   return (
    <>
      <section id="players">
        <h2>welcome unkown entity{show}</h2>
        <p>
          <input type="text" onChange={getUserInput}value={getValues} />
          <button onClick={displayData}>set name</button>
        </p>
      </section>
    </>
  );
}


