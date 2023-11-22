import React, { useState } from 'react';
import Task from './Task';

function Home() {
  const [task, setTask] = useState([]);
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="enter text" className="title" />
        <textarea name="" id="" className="description"></textarea>
        <button>add</button>
      </form>
      {task.map(() => (
        <Task />
      ))}
    </div>
  );
}

export default Home;
