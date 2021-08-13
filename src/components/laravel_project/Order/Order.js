import React from 'react'
import { Route } from 'react-router-dom'
import Checkout from './Checkout'

export default function Order() {
    return (
        <div>
            <Route exact path="/order/checkout" children={<Checkout />}></Route>
        </div>
    )
}
