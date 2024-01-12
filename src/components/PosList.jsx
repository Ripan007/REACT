import React, { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost'

export default function PosList() {
    const [describeText,setDescribeText] = useState('')

function describeChangeHandler(event){
    setDescribeText(event.target.value)
}
  return (
    <>
    <NewPost describe ={describeChangeHandler}/>
      <ul>
        <Post title="react" describe={describeText} />
        <Post title="next" describe="next is much more better than react" />
      </ul>
    </>
  );
}
