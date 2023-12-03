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
      showUsers: false,
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
    return (
      <>
        <button onClick={this.toggleUserHandle.bind(this)}>
          {this.state.showUsers ? 'HIDE ' : 'SHOW'}
        </button>
        {this.state.showUsers && userList}
      </>
    );
  }
}

export default Users;
