import React from 'react';

const userData = [
  { name: 'random', age: 23, gender: 'male' },
  { name: 'random', gender: 'male' },
  { name: 'random', age: 23, gender: 'male' },
];

function UserProfiles({ users }) {
  if (users.length === 0) {
    return <p>user not available</p>;
  }
  return (
    <div>
      {users.map((user, index) => {
        return <UserProfile user={user} />;
      })}
    </div>
  );
}
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      {user.age && <p>{user.age}</p>}
    </div>
  );
}
function Practice() {
  return (
    <div>
      <UserProfiles users={userData} />
    </div>
  );
}

export default Practice;
