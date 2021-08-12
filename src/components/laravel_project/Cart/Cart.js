import React from 'react'
import { Route } from 'react-router-dom'
import CartList from './CartList'

export default function Cart() {
    return (
        <div>
            <Route exact path="/cart/list" children={<CartList />} ></Route>
        </div>
    )
}
