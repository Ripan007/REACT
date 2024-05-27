import React, { useState } from 'react';
import Classes from './User.module.css';
import User from './User';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
export default function Users() {
  const [showUsers, setShowUsers] = useState(true);
  const toggleUsersHandler = () => {
    setShowUsers(currState => !currState);
  };
  const userList = (
    <ul>
      {DUMMY_USERS.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  return (
    <div className={Classes.Users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'hide' : 'show'} users
      </button>
      {showUsers && userList}
    </div>
  );
}
