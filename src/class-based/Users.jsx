import React, { useState } from 'react';

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
  return <div>Users</div>;
}

export default Users;
