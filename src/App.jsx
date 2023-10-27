import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "random",
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter name"
          value={this.state.name}
        />
      </>
    );
  }
}

export default App;
