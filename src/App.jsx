import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "random",
    };
  }
  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export default App;
