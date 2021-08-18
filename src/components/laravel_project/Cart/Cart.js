import React from 'react'
import { Route } from 'react-router-dom'
import CartList from './CartList'
import Protected from '../Common_Compo/Protected'

export default function Cart() {
    return (
        <div>
            <Route exact path="/cart/list" children={<CartList />} >
                <Protected component={<CartList />}></Protected>
            </Route>
        </div>
    )
}
