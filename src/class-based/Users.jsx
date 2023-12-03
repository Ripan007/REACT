import React, { useState } from 'react';

const DUMMY_USERS = [
  { id: 'u1', name: 'romit' },
  { id: 'u2', name: 'rajiv' },
  { id: 'u3', name: 'promit' },
];

function Users() {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsers = () => {
    setShowUsers(currState => !currState);
  };
  return <>{showUsers ? 'hide' : 'show'}</>;
}

export default Users;
