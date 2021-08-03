import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function AddUser() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory();

    const handleSubmit = async () => {
        console.log(username, password, email);

        let result = await fetch("http://127.0.0.1:8000/insertNewUser", {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json
        console.log(result);
        history.push("/user/list")

    }

    return (
        <div>

            <h3>Username</h3>
            <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <h3>Password</h3>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <h3>Email</h3>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <h3></h3>
            <button onClick={handleSubmit} className="btn btn-primary">Save</button>
        </div>
    )
}
