import React from 'react'

import ContactPreview from '../ContactPreview/ContactPreview'

export default (props) => {

    const { contacts } = props
    return (
        <ul className="contact-list">
            {
                contacts &&
                contacts.map(contact =>
                    <ContactPreview contact={contact} key={contact._id} />
                )
            }
        </ul>
    )
}