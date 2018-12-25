import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

import ContactList from '../../cmps/ContactList/ContactList'
import ContactFilter from '../../cmps/ContactFilter/ContactFilter'

import './ContactPage.scss'

@inject('store')
@observer
class ContactPage extends Component {

    contactStore = this.props.store.contactStore
    filter = ''

    async componentDidMount() {
        await this.contactStore.fetchContacts()
    }

    async setFilter(ev) {
        const { target: { value } } = ev
        this.contactStore.fetchContacts({ term: value })
        this.filter = value
    }

    render() {
        const { contacts } = this.contactStore

        return (
            <div className="contacts-container">
                {
                    <div className="list-wrapper" >
                        <ContactFilter onSetFilter={this.setFilter.bind(this)}></ContactFilter>
                        <ContactList contacts={contacts} />
                        <Link to="/contact/edit">
                            <button>+</button>
                        </Link>
                    </div>
                }
            </div >
        )
    }
}

export default ContactPage