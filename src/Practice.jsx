import React from 'react';
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.age}</p>
      {user.website && (
        <p>
          website <a href={user.website}>{user.website}</a>
        </p>
      )}
    </div>
  );
}
function UserProfiles({ users }) {
  if (users === 0) return <p>no user available</p>;
  return (
    <div>
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
}
const userData = [];
function Practice() {
  return (
    <div>
      <h1>user profiles</h1>
      <UserProfiles users={userData} />
    </div>
  );
}

export default Practice;
