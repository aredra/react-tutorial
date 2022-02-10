/* @jsx createElement */
import { createElement, render, Component } from "./react.js";
const rootElement = document.getElementById("root");

class SubTitle extends Component {
  render() {
    return createElement("h3", null, "SubTitle");
  }

}

const Test = props => {
  return createElement("div", null, "Test", createElement(SubTitle, null), createElement("p", null, "parmaemte"));
};

render(createElement(Test, null), rootElement);