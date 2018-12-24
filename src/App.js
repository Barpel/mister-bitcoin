import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './assets/scss/index.scss'

import ContactPage from './pages/ContactPage/ContactPage'
import HomePage from './pages/HomePage/HomePage'
import Chart from './pages/Chart/Chart'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import SignupPage from './pages/SignupPage/SignupPage'
import AppHeader from './cmps/AppHeader/AppHeader'

import UserService from './service/UserService'

const PrivateRoute = props => {
  return props.user ? <Route {...props} /> : <Redirect to="/signup" />
}

class App extends Component {

  state = { user: UserService.getUser() }

  componentDidMount() {
    // const user = UserService.getUser()
    // if (user) {
    //   this.setState({ user })
    // }
  }

  updateStateUser(user) {
    this.setState({ user })
  }

  renderSignupCmp = (props) => {
    return <SignupPage {...props} onSignup={this.updateStateUser.bind(this)} />
  } 

  render() {
    const { user } = this.state
    return (
      <Router>

        <div className="App">

          { user && 
          <AppHeader></AppHeader>
            /* <header className="app-header">
            <nav>
              <ul>
                <NavLink exact to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/contact">
                  <li>Contacts</li>
                </NavLink>
                <NavLink to="/chart">
                  <li>Charts</li>
                </NavLink>
              </ul>
            </nav>
          </header> */}

          <Switch>
            <PrivateRoute path="/" exact component={HomePage} user={user} />
            <PrivateRoute path="/contact" exact component={ContactPage} user={user} />
            <PrivateRoute path="/chart" component={Chart} user={user} />
            <PrivateRoute path="/contact/edit" exact component={ContactEdit} user={user} />
            <PrivateRoute path="/contact/edit/:contactId" component={ContactEdit} user={user} />
            <PrivateRoute path="/contact/:contactId" component={ContactDetails} user={user} />
            <Route path="/signup" render={this.renderSignupCmp}  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
