import React from 'react'
import UserLogin from './UserLogin'

import { Route, Switch, Link } from 'react-router-dom'

export default function Books() {
    return (
        <div>
            <Route exact path="/user/login" children={<UserLogin />} ></Route>
        </div>
    )
}