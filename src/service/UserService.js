export default {
    getUser,
    signupUser,
    updateUser
}

var user = null

function getUser() {
    user = localStorage.getItem('user')

    if (user) {
        return JSON.parse(user)
    }
    return
}

function signupUser(username) {
    user = _createUser(username)
    _saveUserToStorage(user)
    return user
}

function updateUser(contact, transferAmount) {
    var newUser = getUser()
    newUser.coins -= transferAmount
    newUser.moves.push(_createUserMove(contact._id, contact.name, transferAmount))
    _saveUserToStorage(newUser)
    return newUser
}

function _createUserMove(toId, to, transferAmount) {
    return {
        toId,
        to,
        time: Date.now(),
        amount: transferAmount
    }
}

function _createUser(username) {
    return {
        name: username,
        coins: 100,
        moves: []
    }
}

function _saveUserToStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
}