import React, {useState, useRef, useMemo, useCallback} from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './counter';
import InputSample from './InputSample';
import UserList from './User';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('countActiveUsers is run');
  return users.filter(user => user.active).length;
}

function App() {
  // const name = "Start React!";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  }
  
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'aredra',
        email: 'aredra@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'dev1',
        email: 'dev1@example.co.kr',
        active: false
    },
    {
        id: 3,
        username: 'test',
        email: 'test@test.com',
        active: false
    }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const newbie = {
      id: nextId.current,
      username,
      email,
    }

   setUsers(users => users.concat(newbie));
    // 배열도 마찬가지로 불변성 확인, push splice sort  금지
    // setUsers([
    //   ...users,
    //   newbie
    // ]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(user => 
        user.id === id  
          ? { ...user, active: !user.active}
          : user
    ));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <UserList 
        users={users} 
        onRemove={onRemove}         
        onToggle={onToggle}
      />
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>Actived Count : {count}</div>
    </Wrapper>
  );
}

export default App;