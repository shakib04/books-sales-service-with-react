import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <Link className="m-1 p-2" to="/home/books/list">Home</Link>
            <Link className="m-1 p-2" to="/user/my/profile">My Profile</Link>
            <Link className="m-1 p-2" to="/cart/list">My Cart</Link>
        </div>
    )
}
