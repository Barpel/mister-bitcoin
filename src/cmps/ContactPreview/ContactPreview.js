import React from 'react';
import { Link } from 'react-router-dom'


export default (props) => {
    const { contact } = props
    return (
        <Link to={`/contact/${contact._id}`}>
            < li className="contact">
                <img src={`https://robohash.org/${contact.name}.png?set=set2`} alt={contact.name} />
                <h3>{contact.name}</h3>
            </li >
        </Link>
    )
}