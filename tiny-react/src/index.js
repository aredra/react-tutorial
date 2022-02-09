/* @jsx createElement */
import { createElement, render } from "./react.js";

const rootElement = document.getElementById("root");

const Test = (props) => {
  return (
    <div>
      Test
      <p>parmaemte</p>
    </div>
  );
};

render(<Test />, rootElement);
