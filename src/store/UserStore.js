import UserService from '../service/UserService';
import BitcoinService from '../service/BitcoinService';

import { observable, action, computed } from 'mobx';

export default class UserStore {
    @observable
    user = null;

    @observable
    bitcoinRate = 0;

    @computed
    get userCoins() {
        return this.user.coins
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    fetchUser() {
        this.user = UserService.getUser();
    }

    @action
    async fetchBitcoinRate() {
        this.bitcoinRate = await BitcoinService.getBitcoinRate(this.userCoins)
    }

    @action
    async updateUser(contact, transferAmount) {
        this.user = await UserService.updateUser(contact, transferAmount)
    }

    @action
    async signupUser(username) {
        const user = await UserService.signupUser(username)
        this.user = user
        return user
    }
}