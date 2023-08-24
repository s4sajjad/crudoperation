import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'

export default function Auth() {
  return (
    <div>
       <div className="container-fluid offer pt-4">
        <div className="row px-xl-4">
          <div className="col-sm-3 pb-4">
            <Sidebar />
          </div>
          <div className="col-sm-9 pb-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
