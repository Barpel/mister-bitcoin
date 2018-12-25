import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './assets/scss/index.scss'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx';

import ContactPage from './pages/ContactPage/ContactPage'
import HomePage from './pages/HomePage/HomePage'
import Chart from './pages/Chart/Chart'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import SignupPage from './pages/SignupPage/SignupPage'
import AppHeader from './cmps/AppHeader/AppHeader'
import 'moment-timezone';


import UserService from './service/UserService'

const PrivateRoute = props => {
  return props.user ? <Route {...props} /> : <Redirect to="/signup" />
}

@inject('store')
@observer
class App extends Component {

  // state = { user: UserService.getUser() }
  userStore = this.props.store.userStore
  
  @observable
  user = this.userStore.user

  componentDidMount() {
  }


  renderSignupCmp = (props) => {
    return <SignupPage {...props} />
  }

  render() {
    const { user } = this.userStore
    console.log(user)
    return (
      <Router>

        <div className="App">

          {user &&
            <AppHeader></AppHeader>
          }

          <Switch>
            <PrivateRoute path="/" exact component={HomePage} user={user} />
            <PrivateRoute path="/contact" exact component={ContactPage} user={user} />
            <PrivateRoute path="/chart" component={Chart} user={user} />
            <PrivateRoute path="/contact/edit" exact component={ContactEdit} user={user} />
            <PrivateRoute path="/contact/edit/:contactId" component={ContactEdit} user={user} />
            <PrivateRoute path="/contact/:contactId" component={ContactDetails} user={user} />
            
            <Route path="/signup" render={this.renderSignupCmp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
