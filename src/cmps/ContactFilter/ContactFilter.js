import React, { Component } from 'react'

export default class ContactFilter extends Component {
    
    render() {
        return (
            <input onChange={this.props.onSetFilter} />
        )
    }
}