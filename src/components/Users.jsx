import React, { useState } from 'react';
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
  const userList = <ul></ul>;
  return <div>User</div>;
}
