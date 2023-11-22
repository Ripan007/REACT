import React, { useState } from 'react';
import Task from './Task';

function Home() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    setTask([...task, { title, description }]);
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
        <textarea
          name=""
          id=""
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button>add</button>
      </form>
      {task.map((item, index) => {
        const { title, description } = item;
        return <Task key={index} title={title} description={description} />;
      })}
    </div>
  );
}

export default Home;
