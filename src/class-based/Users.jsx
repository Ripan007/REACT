import { Component } from 'react';
import User from './User';

const USERS_DATA = [
  { id: 'u1', name: 'john' },
  { id: 'u2', name: 'mohit' },
  { id: 'u3', name: 'gopi' },
];
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }

  toggleUsersHandler() {
    this.setState(currState => {
      return { showUsers: !currState.showUsers };
    });
  }
  render() {
    const usersList = (
      <ul>
        {USERS_DATA.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'hide' : 'show'}
        </button>
        {this.state.showUsers && usersList}
      </>
    );
  }
}

export default Users;
