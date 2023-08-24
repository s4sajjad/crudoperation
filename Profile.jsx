import React, { useEffect, useState } from 'react'
export default function Profile() {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Profile Details</li>
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        Name
                    </div>
                    <div>
                        Sajjad
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        Email
                    </div>
                    <div>
                        Sajjad@gmail.com 
                    </div>
                </li>
            </ul>
        </>
    )
}
