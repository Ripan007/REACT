import React, { Fragment, useEffect, useState } from 'react';

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

  const searchChangeHandler = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <Fragment>
      <input type="search" onChange={searchChangeHandler} />
      <Users />
    </Fragment>
  );
}

export default UserFinder;
