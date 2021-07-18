import React from "react";

class UncontrolledComponent extends React.Component {
  // 첫 랜더 후 매핑
  inputRef = React.createRef();
  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} id="my-input" type="text" />
        <button onClick={this.click}>Submit</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    const input = document.getElementById("my-input");
    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
