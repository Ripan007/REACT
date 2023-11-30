import React from 'react';

const userData = [];

function UserProfiles({ users }) {
  if (users === 0) {
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
