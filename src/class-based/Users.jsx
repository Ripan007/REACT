import React, { useState } from 'react';
import User from './User';

const DUMMY_USERS = [
  { id: 'u1  ', name: 'rajiv' },
  { id: 'u2  ', name: 'mohit' },
  { id: 'u3  ', name: 'sanjiv' },
];

function Users() {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers(currState => !currState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'hide' : 'show'} users
      </button>
      {showUsers && usersList}
    </div>
  );
}

export default Users;
