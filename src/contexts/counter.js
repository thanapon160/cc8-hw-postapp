import React, { useReducer, useContext } from 'react';

const CounterContext = React.createContext();
const INITIAL_STATE = {
  counter: 0,
}
function counterReducer(state, action) {
  switch (action.type) {
    case "increment": return { counter: state.counter + 1 }
    case "decrement": return state.counter == 0 ? { counter: 0 } : { counter: state.counter - 1 }
    case "reset": return { counter: 0 };
    default: return state;
  }
}
function CounterProvider(props) {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const counterContextValue = { state, dispatch };
  return (
    <CounterContext.Provider value={counterContextValue}>
      {props.children}
    </CounterContext.Provider>
  )
}

function useCounter() {
  const context = useContext(CounterContext)
  return context
}
export { CounterProvider, useCounter }