import { createStore } from "./redux.js";

// Action type
const COUNTER = "count";

function reducer(state, action) {
  if (action.type === COUNTER) {
    return { ...state, counter: action.payload.counter };
  }
  return state;
}

function listener() {
  console.log(store.getState());
}

function actionCreator(type, payload) {
  return { type, payload };
}

const store = createStore(reducer);

store.subsribe(listener);

store.dispatch(actionCreator(COUNTER, { counter: 1 }));
store.dispatch(actionCreator(COUNTER, { counter: 3 }));

function counter(data) {
  store.dispatch(actionCreator(COUNTER, data));
}

counter({ counter: 9 });
