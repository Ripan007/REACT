import React from 'react'
import Post from './Post'
import NewPost from './NewPost'

export default function PosList() {
  return (
    <>
    <NewPost/>
      <ul>
        <Post title="react" describe="react is awesome" />
        <Post title="next" describe="next is much more better than react" />
      </ul>
    </>
  );
}
