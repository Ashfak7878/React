import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}

export default Counter
