import { Component } from 'react';
import User from './User';

const USERS_DATA = [
  { id: 'u1', name: 'ripan' },
  { id: 'u2', name: 'mohit' },
  { id: 'u3', name: 'rajiv' },
];
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showText: false,
    };
  }
  render() {
    const userList = (
      <ul>
        {USERS_DATA.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return <></>;
  }
}

export default Users;
