import React, { Component } from 'react'

import UserService from '../../service/UserService'
import BitcoinService from '../../service/BitcoinService'



export default class HomePage extends Component {
    state = {
        user: null
    }

    async componentDidMount() {
        const user = await UserService.getUser()
        const userBitcoins = await BitcoinService.getBitcoinRate(user.coins)
        user.bitCoins = userBitcoins
        this.setState({ user })
        // console.log(this.state.user)
    }

    render() {
        const { user } = this.state
        return (
            user &&
            <section className="home-page-container">
                <h1>Hi {user.name}!</h1>
                <h2><span role="img" aria-label="emoji">💰</span> Coins: {user.coins}</h2>
                <h2>BTC: {user.bitCoins}<span>₿</span></h2>
            </section>
        )
    }
}