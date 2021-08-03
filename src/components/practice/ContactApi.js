import React, { Component } from 'react'

export default class ContactApi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            isLoaded: false
        }
    }

    //https://jsonplaceholder.typicode.com/users
    componentDidMount() {
        fetch('http://127.0.0.1:8000/getAllUsers')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    contacts: data,
                    isLoaded: true
                })
            })
    }

    render() {
        const { contacts, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>
                data is loading...
                
            </div>
        } else {
            return (
                <div>
                    <center><h1>Contact List</h1></center>
                    {contacts.map((contact) => (
                        <div className="card" key={contact.id}>
                            <div className="card-body">
                                <h5 className="card-title">{contact.username}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                                <p className="card-text">{contact.password}</p>
                            </div>
                        </div>
                    ))}

                    {console.log(contacts)}

                </div>

            )
        }
    }
}
