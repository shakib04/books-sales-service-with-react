import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


export default function NavBar(props) {

    //const [userLogged, setUserLogged] = useState()



    return (
        <div>
            {localStorage.getItem("userid") ?
                <div>
                    <Link className="m-1 p-2" to="/home/books/list">Home</Link>
                    <Link className="m-1 p-2" to="/user/my/profile">My Profile</Link>
                    <Link className="m-1 p-2" to="/cart/list">My Cart</Link>
                    <Link className="m-1 p-2" to="/user/wish/list">My Wishlist</Link>
                    <Link className="m-5 p-2 text-danger" to="/logout">Logout</Link>
                </div> :
                <div>
                    <Link className="m-1 p-2" to="/home/books/list">Home</Link>
                    <Link className="m-1 p-2" to="/user/login">Login</Link>
                    <Link className="m-1 p-2" to="/user/signup">Registration</Link>
                </div>
            }
        </div>
    )
}
