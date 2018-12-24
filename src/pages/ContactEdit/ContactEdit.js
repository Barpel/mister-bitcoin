import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ContactService from '../../service/ContactService'
export default class ContactEdit extends Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: '',
        }
    }

    async componentDidMount() {
        const { contactId } = this.props.match.params
        if (contactId) {
            const contact = await ContactService.getContactById(contactId)
            this.setState({ contact })
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
        // console.log(ev.target.name)
    }
    handleSubmit = async (ev) => {
        ev.preventDefault()
        await ContactService.saveContact(this.state.contact)
        const { history } = this.props
        history.push('/contact')
    }
    removeContact = () => {
        ContactService.deleteContact(this.state.contact._id)
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
                        <button>Back</button>
                    </Link>
                    {
                        contactId &&
                        <button onClick={this.removeContact}>Delete</button>
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