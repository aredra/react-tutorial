import { useReducer } from "react";

// action: 객체이고 type을 필수로 가짐
const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

export default function useReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times in Function component</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}
