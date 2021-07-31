import React, { Component } from 'react'
import Form from './Form'
import Login from './Login'

export default class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            logInOrCreate: "create"
        }
    }


    createNewUser = () => {

        this.setState({
            logInOrCreate: "create"
        })
    }

    login = () => {

        this.setState({
            logInOrCreate: "login"
        })
    }


    render() {
        const { logInOrCreate } = this.state;
        return (
            <div>

                <button className="btn btn-primary d-block" onClick={this.createNewUser}>Create New User</button>
                <button className="btn btn-primary mt-1 d-block" onClick={this.login}>Login</button>

                {logInOrCreate === "create" ? <Form /> : <Login />}


            </div>
        )
    }
}
