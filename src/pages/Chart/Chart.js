import React, { Component } from 'react'

import ChartService from '../../service/ChartService'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default class Chart extends Component {
    state = {
        marketPrices: [],
        transactionsPerDay: []
    }

    async componentDidMount() {
        const marketPrices = await ChartService.getMarketPrice()
        const transactionsPerDay = await ChartService.getTransactionsPerDay()
        this.setState({ marketPrices, transactionsPerDay })
    }

    render() {
        const { marketPrices, transactionsPerDay } = this.state
        return (
            <section className="chart-container">
                <div className="market-prices">
                    <h1>Market Price (USD)</h1>
                    <Sparklines data={[...marketPrices]}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </div>
                <div className="confirmed-transactions" >
                    <h1> Confirmed Transactions Per Day</h1>
                    <Sparklines data={[...transactionsPerDay]}>
                        <SparklinesLine color="navy"/>
                    </Sparklines>
                </div>
            </section>
        )
    }
}