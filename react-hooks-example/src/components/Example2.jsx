import React from "react";

export default  function Example2() {
    // what 은 배열
    const [count, setCount] = React.useState(0);

    return (<div>
        <p>You clicked {count} times in Function component</p>
        <button onClick={click}>Click me</button>
    </div>);

    function click() {
        setCount(count + 1);
    }
}