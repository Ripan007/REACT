import React from 'react';
import Post from './Post';
import style from './PostList.module.css';
function PostList() {
  return (
    <ul className={style.postlist}>
      <Post name="mohit" body="react is awesome" />
      <Post name="janvi" body="javascript is better than react" />
    </ul>
  );
}

export default PostList;
