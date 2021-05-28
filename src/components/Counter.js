import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Counter(props) {
  const history = useHistory();
  useEffect(() => {
    console.log('Effect is running')
  })
  useEffect(() => {
    console.log('Test Effect')
    return () => { //clean up function
      console.log('Clean up!!')
    }
  }, [props.counter])

  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.incrementCounter}>add</button>
      <button onClick={props.decrementCounter}>subtract</button>
      <button onClick={props.resetCounter}>reset</button>
      <button onClick={props.addByAmount}>Add by amount</button>
      <button onClick={() => history.push("/home")}>Homepage</button>
      <input></input>
    </div>
  )
}

export default Counter