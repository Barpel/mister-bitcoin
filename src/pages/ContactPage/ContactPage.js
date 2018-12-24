import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ContactService from '../../service/ContactService'

import ContactList from '../../cmps/ContactList/ContactList'
import ContactFilter from '../../cmps/ContactFilter/ContactFilter'



export default class HomePage extends Component {
    state = {
        contacts: [],
    }

    async componentDidMount() {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts })
    }

    async setFilter(ev) {
        const contacts = await ContactService.getContacts({ term: ev.target.value })
        this.setState({ contacts })
    }

    render() {
        const { contacts } = this.state

        return (
            <div className="contacts-container">
                {
                    <div className="list-wrapper" >
                        <ContactFilter onSetFilter={this.setFilter.bind(this)}></ContactFilter>
                        {/* <ContactList onContactSelected={this.contactSelected.bind(this, selectedContact)} contacts={contacts}> */}
                        <ContactList contacts={contacts} />
                        <Link to="/contact/edit">
                            <button>+</button>
                        </Link>
                    </div>
                }
                {/* {
                    selectedContact &&
                    <ContactDetails selectedContactId={selectedContact._id}
                        onClose={() => this.setState({ selectedContact: null })}></ContactDetails>
                } */}
            </div >
        )
    }
}