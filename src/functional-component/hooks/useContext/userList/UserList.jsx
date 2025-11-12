import React, { useContext } from 'react'
import { UserApiContext } from './UserApiContext'
import { FaRegUser } from "react-icons/fa";

const UserList = () => {
    const { users, loading } = useContext(UserApiContext);
    if (loading) return <p>loading...</p>
    return (
        <div>
            <h2><FaRegUser />Users</h2>
            <ul>
                {users.map(usr => (
                    <li key={usr.id}>
                        {usr.name} - {usr.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
