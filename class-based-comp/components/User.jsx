import { Component } from 'react';

class User extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

/*
* function based component
function User({ name }) {
  return <li>{name}</li>;
}
 */

export default User;
