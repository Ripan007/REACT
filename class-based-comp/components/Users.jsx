import { Component, useState } from 'react';
import User from './User';

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

    function handleToggleUsers() {}
  }
  eUsers;
  render() {
    const usersLists = (
      <ul>
        {DUMMY_DATA.map(user => (
          <User name={user.name} />
        ))}
      </ul>
    );
    return (
      <>
        {this.state.showUsers && usersLists}
        <button onClick={this.handleToggleUsers.bind(this)}>
          {this.state.showUsers ? 'hide' : 'open'} users
        </button>
      </>
    );
  }
}

export default Users;
