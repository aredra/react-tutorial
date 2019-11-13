import React from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './counter';
import InputSample from './InputSample';
import UserList from './User';

function App() {
  // const name = "Start React!";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  }

  return (
    <Wrapper>
      {/* isSpecial 지정하지 않을 경우 true로 인식 */}
      <Hello name="React" color="red" isSpecial/>
      <Hello style={style}/>
      <div className="gray-box"></div>
      <Counter />
      <br/>
      <InputSample/>
      {/* blah blah 
            <div style={style}>{name}</div>
      */}
      <br/>
      <UserList></UserList>
    </Wrapper>
  );
}

export default App;
