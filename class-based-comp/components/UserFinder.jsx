import { useState } from 'react';

const DUMMY_DATA = [
  { id: 'u1', name: 'anjali' },
  { id: 'u2', name: 'gopi' },
  { id: 'u3', name: 'joti' },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_DATA);
  const [searchItem, setSearchItem] = useState('');
  return <></>;
};

export default UserFinder;
