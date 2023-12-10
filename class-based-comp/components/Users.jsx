/*
function Users() {
  const [showUsers, setShowUsers] = useState(false);
  const usersListData = (
    <ul>
      {DUMMY_DATA.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  function showToggleUsers() {
    setShowUsers(currState => !currState);
  }
  return (
    <section>
      <button onClick={showToggleUsers}>{showUsers ? 'close' : 'open'}</button>
      {showUsers && usersListData}
    </section>
  );
}


*/

import { Component } from 'react';
import User from './User';

const DUMMY_DATA = [
  { id: 'u1', name: 'anjali' },
  { id: 'u2', name: 'gopi' },
  { id: 'u3', name: 'joti' },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_DATA.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <>
        <button>{}</button>
      </>
    );
  }
}

export default Users;
