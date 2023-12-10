import { useEffect, useState } from 'react';

const DUMMY_USERS = [
  { id: 'u1', name: 'anjali' },
  { id: 'u2', name: 'gopi' },
  { id: 'u3', name: 'joti' },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter(user => user.name.includes(searchItem))
    );
  });
  return <></>;
};

export default UserFinder;
