const USERS_DATA = [
  { id: 'u1', name: 'john' },
  { id: 'u2', name: 'mohit' },
  { id: 'u3', name: 'deepak' },
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
    return <h1></h1>;
  }
}
