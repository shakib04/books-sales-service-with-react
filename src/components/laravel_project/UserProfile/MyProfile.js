import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function MyProfile() {
    const [userDetails, setUserDetails] = useState()



    useEffect(async () => {
        let data = await fetch('http://localhost:8000/api/user/myaccount/?userid=1');
        data = await data.json()
        console.log(data)
        setUserDetails(data)
    }, [])

    if (!userDetails) {
        return <div>data is loading...</div>
    } else {

        return (

            <div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">*****</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Full Name</th>
                            <td>{userDetails.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>{userDetails.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gender</th>
                            <td>{userDetails.gender}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone Number</th>
                            <td>{userDetails.phone_number}</td>
                        </tr>
                    </tbody>
                </table>
                <Link className="btn btn-primary btn-sm" to="/user/profile/update">Edit Profile Details</Link>
                <Link className="btn btn-secondary btn-sm m-1" to="/user/password/change">Change Password</Link>
            </div>
        )
    }
}
