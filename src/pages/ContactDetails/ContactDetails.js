import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import TransferFund from '../../cmps/TransferFund/TransferFund'
import MovesList from '../../cmps/MovesList/MovesList'

@inject('store')
@observer
class ContactDetails extends Component {

    contactStore = this.props.store.contactStore
    userStore = this.props.store.userStore

    async componentDidMount() {
        const { contactId } = this.props.match.params
        await this.contactStore.fetchContactById(contactId)
        await this.userStore.fetchUser()
    }

    onTransferCoins(ev) {
        ev.preventDefault()

        const { contact } = this.contactStore
        const { target: { amount } } = ev
        const transferAmount = amount.value

        this.userStore.updateUser(contact, transferAmount)
        // var user = UserService.updateUser(contact, transferAmount)
        amount.value = ''
    }

    render() {
        const { contact } = this.contactStore
        var { user } = this.userStore

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
                {
                    user &&
                    <MovesList moves={user.moves.filter(move => contact._id === move.toId)} />
                }
            </section>
        )
    }
}

export default ContactDetails