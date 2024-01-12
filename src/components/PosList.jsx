import React, { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

export default function PosList() {
  const [describeText, setDescribeText] = useState('default');
  const [name, setName] = useState('default');
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function describeChangeHandler(event) {
    setDescribeText(event.target.value);
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false)
  }
  return (
    <>
      {modalIsVisible && (
        <Modal onClose = {hideModalHandler}>
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
