import React from 'react';
import Task from './Task';

function Home() {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="enter text" className="title" />
        <textarea name="" id="" className="description"></textarea>
        <button>add</button>
      </form>
      <Task />
    </div>
  );
}

export default Home;
