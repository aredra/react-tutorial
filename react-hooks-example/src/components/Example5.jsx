import { useState, useEffect } from "react";

export default function Example2() {
  // what 은 배열
  const [count, setCount] = useState(0);

  // useEffect(function, dependency);
  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      console.log("componentWillUnMount");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidMount && componentDidUpdate by count", count);

    return () => {
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times in Function component</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
