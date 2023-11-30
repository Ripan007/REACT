import React from 'react';
function UserProfiles({ users }) {
  if (users === 0) return <p>no user available</p>;
  return <div></div>;
}
const userData = [
  {
    name: 'John',
    email: '@john ',
    age: 23,
    website: 'https://:www.google.com',
  },
  {
    name: 'John',
    email: '@john ',
    age: 23,
    website: 'https://:www.google.com',
  },
  {
    name: 'John',
    email: '@john ',
    age: 23,
    website: 'https://:www.google.com',
  },
];
function Practice() {
  return (
    <div>
      <h1>user profiles</h1>
      <UserProfiles users={userData} />
    </div>
  );
}

export default Practice;
