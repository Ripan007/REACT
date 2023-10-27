import React from "react";
class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      name: "random",
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}

export { App };
