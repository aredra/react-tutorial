/* @jsx createElement */
import { createElement, render, Component } from "./react.js";

const rootElement = document.getElementById("root");

class SubTitle extends Component {
  render() {
    return <h3>SubTitle</h3>;
  }
}
const Test = (props) => {
  return (
    <div>
      Test
      <SubTitle />
      <p>parmaemte</p>
    </div>
  );
};

render(<Test />, rootElement);
