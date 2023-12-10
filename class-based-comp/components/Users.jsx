import { useState } from 'react';

const DUMMY_DATA = [
  { id: 'u1', name: 'anjali' },
  { id: 'u2', name: 'gopi' },
  { id: 'u3', name: 'joti' },
];

export default function Users() {
  const [showUsers, setShowUsers] = useState(false);
  const usersListData = (
    <ul>
      {DUMMY_DATA.map(user => (
        <></>
      ))}
    </ul>
  );
  function showToggleUsers() {}
  return (
    <section>
      <button onClick={showToggleUsers}>{showUsers ? 'open' : 'close'}</button>
    </section>
  );
}
