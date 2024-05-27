import React, { useState } from 'react';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
export default function Users() {
  const [users, setUsers] = useState(true);
  const toggleUsersHandler = () => {};
  return <div>User</div>;
}
