import React from "react";

export class Practice extends React.Component {
  state = {
    counter: 0,
  };

  addHandleOne = () => {
    this.setState((prevState => prevState.counter + 1);
  };
  render() {
    return (
      <div>
        <div>counter : {this.state.counter}</div>
        <button className="bg-slate-700" onClick={this.addHandleOne}>
          add one
        </button>
      </div>
    );
  }
}

