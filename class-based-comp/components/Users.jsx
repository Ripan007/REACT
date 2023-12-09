import React, { useState } from 'react';
import User from './User';

const DUMMY_USERS = [
  { id: 'u1', name: 'rajiv' },
  { id: 'u2', name: 'mohit' },
  { id: 'u3', name: 'gopi' },
];

export default function Users() {
  const [showUsers, setShowUsers] = useState(false);

  const users_lists = (
    <ul>
      {DUMMY_USERS.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  function showToggleUsers() {
    setShowUsers(currState => !currState);
  }
  return (
    <>
      <button onClick={showToggleUsers}>{showUsers ? 'hide' : 'open'}</button>

      {showUsers && users_lists}
    </>
  );
}
