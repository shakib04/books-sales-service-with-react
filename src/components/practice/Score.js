import { Component } from 'react';

export default class Score extends Component {
    render() {
        return <h2>{this.props.seriesName}</h2>
    }
}