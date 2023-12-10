import { Component } from 'react';
import Users from './Users';

/*const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter(user => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeToggler = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={searchChangeToggler} />
      <Users users={filteredUsers} />
    </>
  );
};

*/

const DUMMY_USERS = [
  { id: 'u1', name: 'anjali' },
  { id: 'u2', name: 'gopi' },
  { id: 'u3', name: 'joti' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter(user =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  searchChangeToggler(e) {
    this.setState({ searchTerm: e.target.value });
  }
  render() {
    return (
      <>
        <input type="text" onChange={this.searchChangeToggler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;
