import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Logout() {
    
    localStorage.removeItem("userid")
    
    const history = useHistory()
    history.push("/user/login")
    return (
        <div>

        </div>
    )
}
