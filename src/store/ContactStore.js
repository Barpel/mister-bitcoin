import ContactService from '../service/ContactService';
import { observable, action } from 'mobx';

export default class RobotStore {
    @observable
    contacts = [];

    @observable
    contact = null

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    async fetchContacts(filter) {
        this.contacts = await ContactService.getContacts(filter);
    }

    @action
    async fetchContactById(contactId) {
        this.contact = await ContactService.getContactById(contactId)
    }

    @action
    async saveContact(contact) {
        this.contact = await ContactService.saveContact(contact)
    }

    @action
    deleteContact(contactId) {
        this.contact = null
        ContactService.deleteContact(contactId)
    }
}