import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'aws-amplify';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductAdmin from './components/ProductAdmin';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer';

import './App.css';

library.add(faEdit);

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
  };

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = user => {
    this.setState({ user });
  };

  async componentDidMount() {
    try {
      // Também automaticamente renova o token
      const session = await Auth.currentSession();

      this.setAuthStatus(true);
      console.log(session);

      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);

    } catch (error) {
      console.log(error)
    }

    this.setState({ isAuthenticating: false })

  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };

    return (
      !this.isAuthenticating && (
        <div className="App">
          <Router>
            <div>
              <Navbar auth={authProps} />
              <Switch>
                <Route exact path="/" render={(props) => <Home auth={authProps} {...props} />} />
                <Route exact path="/products" render={(props) => <Products auth={authProps} {...props} />} />
                <Route exact path="/admin" render={(props) => <ProductAdmin auth={authProps} {...props} />} />
                <Route exact path="/login" render={(props) => <LogIn auth={authProps} {...props} />} />
                <Route exact path="/register" render={(props) => <Register auth={authProps} {...props} />} />
                <Route exact path="/forgotpassword" render={(props) => <ForgotPassword auth={authProps} {...props} />} />
                <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification auth={authProps} {...props} />} />
                <Route exact path="/changepassword" render={(props) => <ChangePassword auth={authProps} {...props} />} />
                <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm auth={authProps} {...props} />} />
                <Route exact path="/welcome" render={(props) => <Welcome auth={authProps} {...props} />} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </div>
      )
    );
  }
}

export default App;
