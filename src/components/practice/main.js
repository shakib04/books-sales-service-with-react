import React, { Component } from 'react'
import Score from './Score'
import Movie from './Movie2'
import '../../index.css'

export default class CondionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: true
        }
        this.updateComponent = this.updateComponent.bind(this)
    }  

    updateComponent = () => {

        this.state.isLogged ? this.setState({
            isLogged: false

        }, () => { console.log("moved to Score Page"); }) : this.setState({
            isLogged: true

        }, () => { console.log("back to Movie"); })

    }

    render() {
        const { isLogged } = this.state;

        return (
            <div>
                <button className="changeBtn" onClick={this.updateComponent}>Change</button>
                {isLogged ? <Movie /> : <Score seriesName="Bangladesh tour of Srilanka" />}

            </div>
        )
    }
}
