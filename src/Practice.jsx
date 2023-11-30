import React from 'react';

function UserProfile({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      {user.website && (
        <p>
          Website: <a href={user.website}>{user.website}</a>
        </p>
      )}
    </div>
  );
}

function UserProfiles({ users }) {
  if (users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
}

const userData = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
    website: 'https://alice.com',
  },
  { name: 'Bob', email: 'bob@example.com', age: 30 },
  {
    name: 'Charlie',
    email: 'charlie@example.com',
    age: 35,
    website: 'https://charlie.com',
  },
];

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfiles users={userData} />
    </div>
  );
}

export default App;
