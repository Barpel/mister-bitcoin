import axios from 'axios'

export default {
    getMarketPrice,
    getTransactionsPerDay
}


function getMarketPrice() {
    return axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true')
        .then(res => {
            var marketPriceValues = res.data.values
            var marketPrices = []
            marketPriceValues.forEach(value => {
                marketPrices.push(value.y)
            })
            // console.log(marketPrices)
            return marketPrices
        })
}

function getTransactionsPerDay() {
    return axios.get('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
        .then(res => {
            var transactionsList = res.data.values
            var transactions = []

            transactionsList.forEach(transaction => {
                transactions.push(transaction.y)
            })

            return transactions
        })
}