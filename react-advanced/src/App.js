import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// shouldComponentUpdate 를 PureComponent
class Foo extends React.PureComponent {
  componentDidMount() {
    console.log("Foo componentDidMount", this.props.children);
  }
  componentWillUnmount() {
    console.log("Foo componentWillUnmount");
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }

  render() {
    console.log("Foo render", this.props.children);
    return <p></p>;
  }
}

// 함수형일 경우 Reat.memo 가 PureComponent
const People = React.memo(({ name, age }) => {
  return (
    <div>
      {name} / {age}
    </div>
  );
});

function App() {
  const [state, setstate] = useState(0);

  // 컴포넌트에 연결되는 함수는 그냥 선언할 경우
  // 매번 새로 만들어져 컴포넌트 또한 매번 새로 만들게 된다.
  // useCallbakc 을 사용할 것
  const click = React.useCallback(() => {}, []);

  if (this.state.count % 2 === 0) {
    // return <Foo name="aa" />;
    return (
      <ul>
        <Foo key="2">second</Foo>
        <Foo key="3">third</Foo>
      </ul>
    );
  }

  // return <Foo name="bb" />;
  return (
    <ul>
      <Foo key="1">first</Foo>
      <Foo key="2">second</Foo>
      <Foo key="3">third</Foo>
    </ul>
  );
}

export default App;
