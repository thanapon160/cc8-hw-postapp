import { useState, useReducer } from 'react';
import Counter from '../components/Counter'
import ExtraCounter from '../components/ExtraCounter.js'
import { useCounter } from '../contexts/counter'

import { increment, decrement, reset, addByAmount} from '../feature/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "increment": return { counter: state.counter + 1 }
//     case "decrement": return state.counter == 0 ? { counter: 0 } : { counter: state.counter - 1 }
//     case "reset": return { counter: 0 };
//     default: return state;
//   }
// }
function CounterPage() {
  const [toggle, setToggle] = useState(true);
  // context + reducer
  //const counter = useCounter()

  // const { state, dispatch } = useCounter();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter)

  const [amount, setAmount] = useState(100)

  return (
    <div>
      <h1>Counter Page</h1>
      {toggle && (
        <Counter
          counter={counter}
          incrementCounter={() => dispatch(increment())}
          decrementCounter={() => dispatch(decrement())}
          resetCounter={() => dispatch(reset())}
          addByAmount={() => dispatch(addByAmount(amount))}
        />
      )}

      <h1>Show Counter: {counter}</h1>
      <button onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

    </div>
  )
}

export default CounterPage