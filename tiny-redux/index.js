import { createStore } from "./redux.js";

// Action type
const COUNTER = "count";
const FETCH = "fetch";

// 몽키 디스패칭
const middleware1 = (store) => (dispatch) => (action) => {
  console.log("middleware1", action);
  if (action.type === FETCH) {
    setTimeout(() => {
      dispatch(actionCreator(FETCH, { data: [1, 2, , 3] }));
    }, 1000);
    return;
  }
  dispatch(action);
};

const middleware2 = (store) => (dispatch) => (action) => {
  console.log("middleware2", action);
  dispatch(action);
};

function reducer(state, action) {
  if (action.type === COUNTER) {
    return { ...state, counter: action.payload.counter };
  }

  if (action.type === FETCH) {
    return { ...state, response: action.payload.data };
  }
  return state;
}

function listener() {
  console.log(store.getState());
}

function actionCreator(type, payload) {
  return { type, payload };
}

const store = createStore(reducer, [middleware1, middleware2]);

store.subsribe(listener);

store.dispatch(actionCreator(COUNTER, { counter: 1 }));
store.dispatch(actionCreator(COUNTER, { counter: 3 }));

function counter(data) {
  store.dispatch(actionCreator(COUNTER, data));
}

store.dispatch(actionCreator(FETCH));

counter({ counter: 9 });

console.log(store.getState());
