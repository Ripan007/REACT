import { Component } from 'react';

class User extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
