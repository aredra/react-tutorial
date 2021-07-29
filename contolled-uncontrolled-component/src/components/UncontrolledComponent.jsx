import React from "react";

class UncontrolledComponent extends React.Component {
  // 첫 랜더 후 매핑
  inputRef = React.createRef();
  render() {
    console.log("initial", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.click}>Submit</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
