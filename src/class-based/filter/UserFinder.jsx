import React from 'react';

const DUMMY_USERS = [
  { id: 'u1', name: 'mohit' },
  { id: 'u2', name: 'rajiv' },
  { id: 'u3', name: 'gopal' },
];

function UserFinder() {
  const [filteredUsers, setFilteredUsers] = useState();
  return <div>UserFinder</div>;
}

export default UserFinder;
