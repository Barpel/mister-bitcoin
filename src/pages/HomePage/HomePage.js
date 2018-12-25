import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class HomePage extends Component {

    userStore = this.props.store.userStore

    async componentDidMount() {
        await this.userStore.fetchUser()
        await this.userStore.fetchBitcoinRate()
    }

    render() {
        const { user, bitcoinRate } = this.userStore
        return (
            user &&
            <section className="home-page-container">
                <h1>Hi {user.name}!</h1>
                <h2><span role="img" aria-label="emoji">💰</span> Coins: {user.coins}</h2>
                <h2>BTC: {bitcoinRate}<span>₿</span></h2>
            </section>
        )
    }
}

export default HomePage