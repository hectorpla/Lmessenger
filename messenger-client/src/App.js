import React, { Component } from 'react';
import firebase from './firebase'; // should do only once in the app
import { Switch, Route } from 'react-router-dom';

import Siginin from './Signin/Signin';
import DashBoard from './DashBoard/DashBoard';

class App extends Component {
    constructor() {
        super();
        this.auth = firebase.auth();
    }

    render() {
        const that = this;
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    console.log(authResult);
                    alert(that.auth.currentUser);
                    return true;
                },
                uiShown: function() {
                // tricky here: cannot control the signin page
                }
            },
            // Will use popup for ID Providers sign-in flow instead of the default, redirect.
            signInFlow: 'default',
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: 'unknown/'
        };

        return (
            <Switch>
                <Route exact path='/' render={() => <DashBoard auth={this.auth}/>} />
                <Route exact path='/signin' render={() => <Siginin auth={this.auth} 
                    uiConfig={uiConfig}/>} />
                <Route to="/signin" />
            </Switch>
        )
    }
}

export default App;
