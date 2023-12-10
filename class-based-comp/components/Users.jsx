import { useState } from 'react';

export default function Users() {
  const [showUsers, setShowUsers] = useState(false);

  function showToggleUsers() {}
  return (
    <section>
      <button onClick={showToggleUsers}>{showUsers ? 'open' : 'close'}</button>
    </section>
  );
}
