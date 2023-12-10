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

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }
  toggleUserHandler() {
    this.setState(currState => {
      return {
        showUsers: !currState.showUsers,
      };
    });
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUsers ? 'hide' : 'open'} users
        </button>
        {this.state.showUsers && usersList}
      </>
    );
  }
}

export default Users;

@media

/**
 * * CLASS COMPONENT LIFE CYCLE :
 * * sideEffects in functional  component  useEffects()
 * * componentDidMount => called once a component mounted(evaluated and render by react) => useEffect(...[])
 * * componentDidUpdate => called once a component  updated(re-evaluated and re-render by react) => useEffect(...[someValue])
 * * componentWillUnmount => called right before component is unmounted(right before  removed from DOM) => UseEffect(()=>{ return ()=>{}})
 *
 */
