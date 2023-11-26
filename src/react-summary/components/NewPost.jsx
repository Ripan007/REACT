import React from 'react';

function NewPost() {
  return (
    <form>
      <label htmlFor="">text</label>
      <textarea name="" id="body" cols="30" required rows="3"></textarea>
      <label htmlFor="">name</label>
      <input type="text" id="name" required />
    </form>
  );
}

export default NewPost;
