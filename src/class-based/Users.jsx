import React, { useState } from 'react';
import User from './User';

const DUMMY_USERS = [
  { id: 'u1', name: 'romit' },
  { id: 'u2', name: 'rajiv' },
  { id: 'u3', name: 'promit' },
];

function Users() {
  const [showUsers, setShowUsers] = useState(false);

  const toggleUsers = () => {
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
    <>
      <button onClick={toggleUsers}> {showUsers ? 'hide' : 'show'}</button>
      {showUsers && usersList}
    </>
  );
}

export default Users;
