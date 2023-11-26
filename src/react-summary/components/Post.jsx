import style from './Post.module.css';

import React from 'react';
const names = ['mohit', 'rajiv'];

const chosenNames = Math.random() > 0.5 ? names[0] : names[1];
console.log(Math.random());

function Post() {
  return (
    <div className={style.post}>
      <h1 className={style.post__name}>{chosenNames}</h1>
      <p>details</p>
    </div>
  );
}

export default Post;
