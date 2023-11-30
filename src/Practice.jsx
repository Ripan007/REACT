import React from 'react';

const userData = [
  { name: 'random', age: 23, gender: 'male' },
  { name: 'random', age: 23 },
  { name: 'random', age: 23, gender: 'male' },
];

function UserProfiles() {
  return <div></div>;
}
function UserProfile() {
  return <div></div>;
}
function Practice() {
  return (
    <div>
      <UserProfiles users={userData} />
    </div>
  );
}

export default Practice;
