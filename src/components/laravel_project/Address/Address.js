import React from 'react'
import UpdateAddress from './UpdateAddress'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import UserAddress from './UserAddress'
import NewAddress from './NewAddress'
import DeleteAddress from './DeleteAddress'

export default function Address() {
    return (
        <div>
            <Route exact path="/user/address/update/:id" component={UpdateAddress}></Route>
            <Route exact path="/CreateAddress" children={<NewAddress history={useHistory()} />}></Route>
            <Route exact path="/user/address/list" component={UserAddress}></Route>
            <Route exact path="/user/address/delete/:id" component={DeleteAddress}></Route>
        </div>
    )
}
