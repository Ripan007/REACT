import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "random",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter name"
          // value={this.state.name}
          onChange={this.handleChange}
        />
        <h2>{this.state.name}</h2>
      </>
    );
  }
}
export default App;
