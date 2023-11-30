import React from 'react';
function UserProfiles() {
  return <h1>profiles</h1>;
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
