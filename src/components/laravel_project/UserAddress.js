import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default class UserAddress extends Component {


    allAddress = [
        {
            "House_No": 10,
            "Road_No": 10,
            "Area": "Nikunja",
            "Postal_Code": 1210,
            "Mobile_Number": "01522048298",

        },
        {
            "House_No": 15,
            "Road_No": 12,
            "Area": "Keranigonj",
            "Postal_Code": 1252,
            "Mobile_Number": "01429048298",

        }
    ]

    render() {
        return (
            <div>
                <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-2 mb-lg-4">
                    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-5 mb-lg-8 pb-xl-1">Addresses</h6>
                    <p><Link to="/CreateAddress" class="btn btn-primary width-160 rounded-0 btn-wide font-weight-medium">Create New</Link></p>
                    <div class="row row-cols-1 row-cols-md-2">

                        {/* @foreach ($allAddress as $address) */}
                        {this.allAddress.map((address) => (
                            <div class="col">
                                <div class="mb-6 mb-md-0">
                                    <h6 class="font-weight-medium font-size-22 mb-3">Shipping Address
                                    </h6>
                                    <address class="d-flex flex-column mb-4">
                                        <span class="text-gray-600 font-size-2">House No: {address.House_No}</span>
                                        <span class="text-gray-600 font-size-2">Road No: {address.Road_No}</span>
                                        <span class="text-gray-600 font-size-2">Area: {address.Area}</span>
                                        <span class="text-gray-600 font-size-2">{address.City}, {address.Postal_Code}</span>
                                        <span class="text-gray-600 font-size-2">{address.Country}</span>
                                        <span class="text-gray-600 font-size-2">Mobile Number: {address.Mobile_Number}</span>
                                    </address>
                                    <div class="d-flex">
                                        {/* prev {{ url('/user/edit/address') }}/{{ $address-> address_id}} */}
                                        <Link to="/user/edit/address" class="btn btn-dark width-150 rounded-0 btn-wide font-weight-medium">Edit</Link>
                                        <a href="{{url('/user/delete/address')}}/{{$address->address_id}}" class="btn btn-danger width-150 rounded-0 btn-wide font-weight-medium">Remove</a>
                                    </div>
                                    <div class="d-flex">

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}
