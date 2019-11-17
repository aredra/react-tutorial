import React, {useReducer, useRef, useMemo, useCallback} from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './User';
import CreateUser from './CreateUser';
//import useInputsState from './useInputsState';
import useInputsReducer from './useInputsReducer';
import ContextSample from './ContextSample';

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT' :
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    case 'CREATE_USER' : 
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'REMOVE_USER' :
      return {
        ...state,
        users: state.users.filter(user =>
            user.id !== action.id
          )
      };
    case 'TOGGLE_USER' :
      console.log(action.id);
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id 
            ? {...user, active: !user.active} 
            : user
          ) 
      };
    default : 
      throw new Error('Unhandled action in App.js-reducer');
  }
}

const initialState = {
  users: [
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
  ]
}

function countActiveUsers(users) {
  console.log('countActiveUsers is run');
  console.log(users);
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

  const [form, onChange, onReset] = useInputsReducer({
    username: '',
    email: ''
  })
  const [state, dispatch] = useReducer(reducer, initialState);
  const {username, email} =form;
  const {users} = state;
  const nextId = useRef(4);

  // const onChange = useCallback(e => {
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   });
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    onReset();
  }, [username, email, onReset]);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);
  const count = useMemo(() =>  countActiveUsers(users), [users]);

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
      &nbsp;
      <ContextSample />
    </Wrapper>
  );
}

export default App;