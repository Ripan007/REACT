import React, { useState } from 'react';

const DUMMY_USERS = [
  { id: 'u1', name: 'rajiv' },
  { id: 'u1', name: 'rajiv' },
  { id: 'u1', name: 'rajiv' },
];

export default function Users() {
  const [showUsers, setShowUsers] = useState(true);
  return <div>Users</div>;
}
