import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Auth from '../admin/Auth'
import Profile from '../admin/Profile'
import User from '../admin/users/User'
import AddOrUpdate from '../admin/users/AddOrUpdate'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path='/admin' element={<Auth />}>
            <Route index={true} element={<Profile />} />


            <Route path="users" element={<User />} />
            <Route path='users/add' element={<AddOrUpdate />} />
            <Route path='users/edit/:id' element={<AddOrUpdate />} />

        </Route>
    </Routes>
  )
}
