import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserStart, getUserStart } from '../../redux/action/user.action'


export default function User() {

    const { user: { users } } = useSelector(state => state)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserStart())
    }, [users.length])
    return (
        // <div>User 1213243t54gfgb</div>
        <>
            <div className="card">
                <div className='card-header bg-primary text-white' style={{
                    textAlign: "left"
                }}>
                    <h5> User
                        <Link to="/admin/users/add" className='btn btn-success' style={{
                            float: "right"
                        }}>Add User</Link>
                    </h5>
                </div>
                <div className="card-body">
                    <div className='table-responsive'>
                        <table className="table table-striped-columns">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 && users.map((user, index) => (
                                        <tr key={index}>
                                            <td >{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.type}</td>
                                            <td>{user.status == '1' ? 'Active' : 'Inactive'}</td>
                                            <td>
                                                <Link className='btn btn-warning mx-2' to={`/admin/users/edit/${user.id}`}>Edit</Link>
                                                <button className='btn btn-danger' onClick={() =>dispatch(deleteUserStart(user.id))}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 

        </>
    )
}
