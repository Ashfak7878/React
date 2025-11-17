import React from 'react'

const Items = () => {

    const fruitItems = ['apple', 'banana', 'ornage']
    return (
        <div>
            <ul>
                {fruitItems.map((fs, index) => (
                    <li key={index}>{fs}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Items
