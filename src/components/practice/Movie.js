import React, { Component } from 'react'

export default class Movie extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movieViews: 100
        }
    }

    refreshMovieStats = () => {
        this.setState({
            movieViews: this.state.movieViews + Math.round(Math.random() * 50)
        })
    }


    render() {
        const { movieViews } = this.state
        return (
            <div>
                <h1>Movie Views: {movieViews}</h1>
                <button onClick={this.refreshMovieStats} disabled={movieViews >= 300 ? true : false}>Refresh</button>
            </div>
        )
    }
}
