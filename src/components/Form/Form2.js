import React, { useState } from 'react'

export default function Form2() {

    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("")

    const [userId, setUserId] = useState(1001);

    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.trim() == "") {
            setErrorMsg("Name is required");
            return;
        } else {
            setErrorMsg("");
        }
        setUserId(parseInt(userId) + 1)

        let userInfo = {
            userId, userName, userPhone
        }

        console.log(userInfo);

    }

    const nameChange = (e) => {
        setUserName(e.target.value)
    }


    const phoneChange = (e) => {
        setUserPhone(e.target.value)
    }



    return (
        <div>
            <form autoComplete="yes" onSubmit={handleSubmit}>
                <h3>User Id</h3>
                <input type="text" name="userId" value={userId} placeholder="User Id" disabled />
                <h3>User Name</h3>
                <input id="userName" name="userName" value={userName} onChange={nameChange} type="text" placeholder="User Name" />
                <h3>User Mobile Number</h3>
                <input id="userPhone" type="text" value={userPhone} name="userPhone" onChange={phoneChange} placeholder="User Mobile Number" />

                <p className="text-danger h4">{errorMsg}</p>
                <button className="btn btn-link">Submit</button>
            </form>
        </div>
    )
}
