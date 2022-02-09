/* @jsx createElement */
import { createElement, render } from "./react.js";
const rootElement = document.getElementById("root");

const Test = props => {
  return createElement("div", null, "Test", createElement("p", null, "parmaemte"));
};

render(createElement(Test, null), rootElement);