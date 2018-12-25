import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'


@inject('store')
@observer
class ContactEdit extends Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: '',
        }
    }

    contactStore = this.props.store.contactStore

    componentDidMount() {
        const { contactId } = this.props.match.params
        if (contactId) {
            this.contactStore.fetchContactById(contactId)
            this.setState({ contact: JSON.parse(JSON.stringify(this.contactStore.contact)) })
        }
    }
    handleChange = (ev) => {
        var param = ev.target.name
        this.setState({
            contact:
            {
                ...this.state.contact,
                [param]: ev.target.value
            }
        })
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        await this.contactStore.saveContact(this.state.contact)
        this.props.history.push('/contact')
    }

    deleteContact = () => {
        this.contactStore.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')
    }

    render() {
        const { name, phone, email } = this.state.contact
        const contactId = this.state.contact._id
        const header = contactId ? 'Edit' : 'Add'
        const route = contactId ? `/${contactId}` : ''

        return (
            <form className="contact-edit" onSubmit={this.handleSubmit}>
                <div className="contact-edit-btns">
                    <Link to={`/contact${route}`}>
                        <button type="button">Back</button>
                    </Link>
                    {
                        contactId &&
                        <button type="button" onClick={this.deleteContact}>Delete</button>
                    }
                </div>
                <h1>{header} Contact</h1>
                <input type="text" value={name} placeholder="Contact Name" name="name" onChange={this.handleChange} required />
                <input type="text" value={phone} placeholder="Contact Phone" name="phone" onChange={this.handleChange} required />
                <input type="email" value={email} placeholder="Contact Email" name="email" onChange={this.handleChange} required />
                <button>Save</button>
            </form>
        )
    }
}

export default ContactEdit