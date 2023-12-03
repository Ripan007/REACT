import React, { useState } from 'react';

const DUMMY_USERS = [
  { id: 'u1', name: 'mohit' },
  { id: 'u2', name: 'rajiv' },
  { id: 'u3', name: 'gopal' },
];

function UserFinder() {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter(user => user.name.includes(searchTerm))
    );
  }, [searchTerm]);
  return <div>UserFinder</div>;
}

export default UserFinder;
