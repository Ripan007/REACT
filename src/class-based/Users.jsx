import { Component } from 'react';

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
  }
  render() {
    return <h1>users</h1>;
  }
}

export default Users;
