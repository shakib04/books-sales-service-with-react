import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: 1001,
            errorMsg: "",
            anyError: false
        }
    }

    handleSubmit = (e) => {

        const formData = e.target;
        switch (true) {

            case formData.userName.value === "":
                this.setState({
                    errorMsg: "name is required",
                    anyError: true
                })
                break;

            case formData.userName.value.length <= 3:
                this.setState({
                    errorMsg: "name is too short",
                    anyError: true
                })
                break;

            case formData.userPhone.value === "":
                this.setState({
                    errorMsg: "phone is required",
                    anyError: true
                })
                break;


            default:
                this.setState({
                    errorMsg: "",
                    anyError: false
                })
                break;
        }


        e.preventDefault();
        if (this.state.anyError) {
            e.preventDefault();
        } else {

        }

    }

    render() {
        const { userId, errorMsg } = this.state;
        return (
            <div>
                <form autoComplete="yes" onSubmit={this.handleSubmit}>
                    <h3>User Id</h3>
                    <input type="text" placeholder="User Id" value={userId} disabled />
                    <h3>User Name</h3>
                    <input id="userName" name="userName" type="text" placeholder="User Name" />
                    <h3>User Mobile Number</h3>
                    <input id="userPhone" type="text" name="userPhone" placeholder="User Mobile Number" />

                    <p></p>
                    <button>Submit</button>
                </form>

                <h4 className="text-danger">{errorMsg}</h4>

            </div>
        )
    }
}
