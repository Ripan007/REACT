import React, { useState } from 'react';
import Task from './Task';

function Home() {
  const [tasks, setTask] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    setTask([...tasks, { title, description }]);
    setTitle('');
    setDescription('');
  }

  function deleteTask(index) {
    const filterArr = tasks.filter((val, i) => i !== index);
    setTask(filterArr);
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
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">add</button>
      </form>
      {tasks.map((item, index) => {
        const { title, description } = item;
        return (
          <Task
            key={index}
            title={title}
            description={description}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Home;
