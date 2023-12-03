import React, { useState } from 'react';

const DUMMY_USERS = [
  { id: 'u1  ', name: 'rajiv' },
  { id: 'u2  ', name: 'mohit' },
  { id: 'u3  ', name: 'sanjiv' },
];

function Users() {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers(currUsers);
  };
  return <div>Users</div>;
}

export default Users;
