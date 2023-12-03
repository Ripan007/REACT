import { Component } from 'react';
import User from './User';

const USERS_DATA = [
  { id: 'u1', name: 'john' },
  { id: 'u2', name: 'mohit' },
  { id: 'u3', name: 'gopal' },
];
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUser: false,
    };

    const usersList = (
      <ul>
        {USERS_DATA.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }

  render() {
    return <h1>users</h1>;
  }
}

export default Users;
