import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0) //[state, setState] return as array // เปลี่ยนแปลงผ่าน function state เท่านั้น
    // counter = counter + 1 อย่าทำ ทำไม่ได้

    function handleAddCounter() {
        setCounter(counter + 1)
        console.log('Add counter');
    }

    function handleSubtractCounter() {
        setCounter(counter - 1)
        console.log('Subtract counter');
    }

    function handleResetCounter() {
        setCounter(counter * 0) // setCounter(0) อีกวิธี
        console.log('Reset Counter');
    }

    return (
        <div>
            <h1>Counter: { counter }</h1>
            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleSubtractCounter}>Subtract</button>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    )
}

export default Counter