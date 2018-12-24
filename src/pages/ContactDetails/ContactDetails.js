import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ContactService from '../../service/ContactService'
import UserService from '../../service/UserService'

import TransferFund from '../../cmps/TransferFund/TransferFund'
import MovesList from '../../cmps/MovesList/MovesList'

export default class ContactDetails extends Component {
    state = {
        contact: null,
        user: UserService.getUser()
    }

    async componentDidMount() {
        const { contactId } = this.props.match.params
        const contact = await ContactService.getContactById(contactId)
        this.setState({ contact })
    }

    onTransferCoins(ev) {
        ev.preventDefault()
        const { contact } = this.state
        var transferAmount = ev.target.amount.value
        var user = UserService.updateUser(contact, transferAmount)
        this.setState({ user })
        ev.target.amount.value = ''
    }

    render() {
        const { contact, user } = this.state
        return (
            contact &&
            <section className="contact-details" >
                <div className="contact-details-header">
                    <Link to="/contact">
                        <button>Back</button>
                    </Link>
                    <Link to={`/contact/edit/${contact._id}`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <img src={`https://robohash.org/${contact.name}.png?set=set2`} alt={contact.name} />
                <h2>Name: {contact.name}</h2>
                <h2>Email: {contact.email}</h2>
                <h2>Phone: {contact.phone}</h2>

                <TransferFund contactName={contact.name} onTransferCoins={this.onTransferCoins.bind(this)} />
                <MovesList moves={user.moves.filter(move => contact._id === move.toId)} />
            </section>
        )
    }
}