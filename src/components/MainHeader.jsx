import React from 'react'
import { FaRegMessage } from 'react-icons/fa6';

export default function MainHeader() {
  return (
    <button>
      <p>
        {' '}
        <FaRegMessage /> new posts
      </p>
    </button>
  );
}
