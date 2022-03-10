import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";
import Input from "./components/Input";
import Button from "./components/Button";
import Memo from "./components/Memo";
import Example from "./components/context/Example";

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

// function App() {
//   const [state, setstate] = useState(0);

//   // 컴포넌트에 연결되는 함수는 그냥 선언할 경우
//   // 매번 새로 만들어져 컴포넌트 또한 매번 새로 만들게 된다.
//   // useCallbakc 을 사용할 것
//   const click = React.useCallback(() => {}, []);

//   if (this.state.count % 2 === 0) {
//     // return <Foo name="aa" />;
//     return (
//       <ul>
//         <Foo key="2">second</Foo>
//         <Foo key="3">third</Foo>
//       </ul>
//     );
//   }

//   // return <Foo name="bb" />;
//   return (
//     <ul>
//       <Foo key="1">first</Foo>
//       <Foo key="2">second</Foo>
//       <Foo key="3">third</Foo>
//     </ul>
//   );
// }

/**
 * @createPortal
 */

// function App() {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0,0,0,.5)",
//             }}
//             onClick={close}
//           >
//             Happy Hacking
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return (
    <div>
      <Example />
      <Input />
      <Button />
      <Memo />
      {/* <MyInput ref={myInputRef}></MyInput>
      <button onClick={click}>send</button> */}
    </div>
  );
}

export default App;
