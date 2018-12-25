import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class SignupPage extends Component {
    state = { user: { name: '' } }

    userStore = this.props.store.userStore

    handleChange = (ev) => {
        this.setState({ user: { name: ev.target.value } })
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        const user = await this.userStore.signupUser(this.state.user.name)
        this.props.history.replace('/')
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

export default SignupPage