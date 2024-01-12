import React from 'react';
import { FaRegMessage } from 'react-icons/fa6';

export default function MainHeader({ createPost }) {
  return (
    <button onClick={createPost}>
      <p>
        <FaRegMessage /> new posts
      </p>
    </button>
  );
}
