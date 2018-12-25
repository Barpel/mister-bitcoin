import React from 'react'
import './ContactFilter.scss'

export default (props) => {
    return (
        <input className="contact-filter" onChange={props.onSetFilter} placeholder="Search" />
    )
}