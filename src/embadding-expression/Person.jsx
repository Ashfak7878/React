import React from 'react'

const Person = () => {
    const Person_data = {
        name: 'Ajay',
        age: 20,
        isStudent: 'yes'
    }
    return (
        <div>
            <table border='1' cellPadding='10' cellSpacing='10'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>isStudent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Person_data.name }</td>
                        <td>{Person_data.age }</td>
                        <td>{Person_data.isStudent}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Person
