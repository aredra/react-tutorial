import React, {useReducer, useMemo,  createContext} from 'react';
import produce from 'immer';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './User';
import CreateUser from './CreateUser';
//import useInputsState from './useInputsState';
//import useInputsReducer from './useInputsReducer';
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
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   inputs: initialState.inputs,
      //   users: state.users.concat(action.user)
      // };
      case 'REMOVE_USER' :
        return produce(state, draft => {
          const index = draft.users.findIndex(user => user.id === action.id);
          draft.users.splice(index, 1);
        });
      // return {
      //   ...state,
      //   users: state.users.filter(user =>
      //       user.id !== action.id
      //     )
      // };
    case 'TOGGLE_USER' :
        return produce(state, draft => {
          const user = draft.users.find(user => user.id === action.id);
          user.active = !user.active;
        })
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id 
      //       ? {...user, active: !user.active} 
      //       : user
      //     ) 
      // };
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

export const UseDispatch = createContext(null);

function App() {
  // const name = "Start React!";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
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
      <UseDispatch.Provider value={dispatch}>
        <UserList users={users} />
        <CreateUser />
      </UseDispatch.Provider>
      <div>Actived Count : {count}</div>
      &nbsp;
      <ContextSample />
    </Wrapper>
  );
}

export default App;