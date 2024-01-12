import React from 'react';

export default function NewPost() {
  return (
    <form
      style={{
        background: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        maxWidth:'200px',
        padding:'20px',
        borderRadius:'10px'
      }}
    >
      <label htmlFor="text">text</label>
      <textarea name="" id="" cols="30" rows="3"></textarea>
      <label htmlFor="name">your name</label>
      <input type="text" placeholder="max" />
    </form>
  );
}
