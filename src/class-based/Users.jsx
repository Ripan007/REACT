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
    const usersList = <ul></ul>;
    return (
      <>
        <button onClick={this.toggleUsersHandler.this(bind)}>
          {this.state.showUsers ? 'hide' : 'show'}
        </button>
        {this.state.showUsers && usersList}
      </>
    );
  }
}
