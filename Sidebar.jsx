import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Menu</li>
                <li className="list-group-item">
                   <Link to="/admin">Profile</Link> </li>
                <li className="list-group-item">
                    <Link to="/admin/users">User</Link></li>
            </ul>
        </>
    )
}
