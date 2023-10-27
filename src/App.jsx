import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
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
      </>
    );
  }
}

export default App;
