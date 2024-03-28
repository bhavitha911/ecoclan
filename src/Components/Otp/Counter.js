import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const incrementMethod = () => {
        setCount(count + 1)
    }
    const decrementMethod = () => {
        setCount(count - 1)
    }
    return (
        <div><h1>count:{count}</h1>
            <button onClick={incrementMethod}>Increment</button> 
            <button onClick={decrementMethod}>Decrement</button>
        </div>
    )
}
