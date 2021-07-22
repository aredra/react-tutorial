import React from "react";

// useSate => count;
//useState => { count: 0 }

export default  function Example3() {
    const [state, setState] = React.useState({count: 0});

    return (<div>
        <p>You clicked {state.count} times in Function component2</p>
        <button onClick={click}>Click me</button>
    </div>);

    function click() {
        setState(state => ({count: state.count + 1}));
    }
}