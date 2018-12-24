import React, { Component } from 'react'
import UserService from '../../service/UserService'

export default class SignupPage extends Component {
    state = { user: { name: '' } }

    handleChange = (ev) => {
        this.setState({ user: { name: ev.target.value } })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const user = UserService.signupUser(this.state.user.name)
        this.props.onSignup(user)
        const { history } = this.props
        history.replace('/')

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="user-signup">
                <img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG25.png" alt="bitcoin" />
                <input type="text" name="name" placeholder="Enter New Username" value={this.state.user.name} onChange={this.handleChange} />
                <button>Sign Up</button>
            </form>
        )
    }
}