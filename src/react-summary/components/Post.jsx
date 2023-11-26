import React from 'react';
const names = ['mohit', 'rajiv'];

const chosenNames = Math.random() > 0.5 ? names[0] : names[1];
console.log(Math.random());

function Post() {
  return (
    <>
      <h1>{chosenNames}</h1>
      <p>details</p>
    </>
  );
}

export default Post;
