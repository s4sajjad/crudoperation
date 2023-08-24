import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addUserStart, editUserStart } from '../../redux/action/user.action';
import {toastr} from 'react-redux-toastr';

let initalValue;

export default function AddOrUpdate() {
  const { user: { users } } = useSelector(state => state)
 

  let { id } = useParams();

  if (id) {
    let data = users.find(user => user.id === id)
    if (data) {
      initalValue = data;
    }
  } else {
    initalValue = {
      name: '',
      email: '',
      type: 'Customer',
      status: ''
    }
  }

  const [formData, setFormData] = useState(initalValue);
  const { name, email, type, status } = formData;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const inputChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  const submit = (event) => {
    event.preventDefault();
   
    if (id) {
   dispatch(editUserStart(formData, id))
   toastr.success('User Update Successfully')
    } else {
      dispatch(addUserStart(formData))
      toastr.success('User Added Successfully')
    }
    setTimeout(() => {
      navigate('/admin/users')
    }, 3000)
  }
  useEffect(() => {

  }, [id])
  return (
    <>
      <div className="card">
        <div className='card-header bg-primary text-white' style={{
          textAlign: "left"
        }}>
          <h5>{id ? 'Edit' : 'Add'} User
            <Link to="/admin/users" className='btn btn-success' style={{
              float: "right"
            }}>Back</Link>
          </h5>
        </div>
        <div className="card-body">
          <div className='table-responsive'>
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name='name'
                  value={name}
                  onChange={inputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name='email'
                  value={email}
                  onChange={inputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleCheck1">Type</label>
                <select
                  className="form-select form-control"
                  name='type'
                  defaultValue={type}
                  onChange={inputChange}>
                  <option>Select Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleCheck1">Status</label>
                <select
                  className="form-select form-control"
                  name='status'
                  defaultValue={status}
                  onChange={inputChange}>
                  <option>Select Status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
