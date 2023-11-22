import React from 'react';

function Home() {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="enter text" className="title" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="description"
        ></textarea>
        <button>add</button>
      </form>
    </div>
  );
}

export default Home;
