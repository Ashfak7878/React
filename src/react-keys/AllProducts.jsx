import React from 'react'

const AllProducts = () => {

    const products = [
        { id: 'p1', name: 't-shirt' },
        { id: 'p2', name: 'shirt' },
    ]
    return (
        <div>
            <ul>
                {products.map(shareef => (
                    <li
                        style={{ background: 'red', color: 'white', padding: '10px', margin: '10px' }}
                             key={shareef.id}>
                        {shareef.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts
