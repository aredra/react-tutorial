export function createStore(reducer) {
  let state;
  const handler = [];

  function dispatch(action) {
    state = reducer(state, action);
    handler.forEach((f) => f());
  }

  function getState() {
    return state;
  }

  function subsribe(listener) {
    handler.push(listener);
  }

  return {
    dispatch,
    getState,
    subsribe,
  };
}
