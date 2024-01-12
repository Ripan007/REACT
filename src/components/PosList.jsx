import React, { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

export default function PosList({isPosting ,hidePost}) {
  const [describeText, setDescribeText] = useState('default');
  const [name, setName] = useState('default');


  function describeChangeHandler(event) {
    setDescribeText(event.target.value);
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
  }


  return (
    <>
      {isPosting && (
        <Modal onClose = {hidePost}>
          <NewPost
            describe={describeChangeHandler}
            nameHandler={nameChangeHandler}
          />
        </Modal>
      )}

      <ul>
        <Post title={name} describe={describeText} />
        <Post title="next" describe="next is much more better than react" />
      </ul>
    </>
  );
}

