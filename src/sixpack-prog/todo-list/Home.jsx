import React, { useState } from 'react';
import Task from './Task';

function Home() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea name="" id="" placeholder="description"></textarea>
        <button>add</button>
      </form>
      {task.map(() => (
        <Task />
      ))}
    </div>
  );
}

export default Home;
