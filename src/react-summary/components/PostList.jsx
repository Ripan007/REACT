import React from 'react';
import Post from './Post';

function PostList() {
  return (
    <ul>
      <Post name="mohit" body="react is awesome" />
      <Post name="janvi" body="javascript is better than react" />
    </ul>
  );
}

export default PostList;
