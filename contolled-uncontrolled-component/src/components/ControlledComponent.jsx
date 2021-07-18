import React from "react";

class ControlledComponent extends React.Component {
  state = {
    value: "",
  };
  render() {
    return (
      <div>
        <input value={this.value} onChange={this.change} />
        <button></button>
      </div>
    );
  }

  change = (e) => {
    console.log(e.target.valule);
    this.setState({ value: e.target.value });
  };
}

export default ControlledComponent;
