import React, { useState } from 'react';
import User from './User';

const DUMMY_USERS = [
  { id: 'u1', name: 'rajiv' },
  { id: 'u2', name: 'mohit' },
  { id: 'u3', name: 'gopi' },
];

export default function Users() {
  const [showUsers, setShowUsers] = useState(true);

  const users_lists = (
    <ul>
      {DUMMY_USERS.map(user => (
        <User name={user.name} />
      ))}
    </ul>
  );
  function showToggleUsers() {}
  return (
    <>
      {showUsers && users_lists}
      <button onClick={showToggleUsers}>toggle</button>
    </>
  );
}
