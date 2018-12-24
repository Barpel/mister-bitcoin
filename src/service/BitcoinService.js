import axios from 'axios'

//https://blockchain.info/tobtc?currency=USD&value=1

export default{
    getBitcoinRate,
}

function getBitcoinRate(num) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${num}`)
        .then(res=> res.data)
}