import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// firebase
import firebase, { firebaseApp } from './firebase'; // should do only once in the app
import FireBaseAuth from 'react-firebaseui/FirebaseAuth';

import Siginin from './Signin/Signin';
import DashBoard from './DashBoard/DashBoard';

class App extends Component {
    constructor() {
        super();
        // this.auth = firebaseApp.auth();
        
        this.uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                    console.log(authResult);
                    alert("App:", firebaseApp.auth().currentUser);
                    return true;
                },
                uiShown: function() {
                    // tricky here: cannot control the signin page
                }
            },
            // Will use popup for ID Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: 'unknown/'
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => <DashBoard auth={firebaseApp.auth()}/>} />
                <Route exact path='/signin' render={() => this.renderSignIn()} />
                <Route to="/signin" />
            </Switch>
        )
    }

    // use of the official react-firebase-ui
    // weird error: app undefined, seems to initialize the firebase again
    // TODO: test it again
    renderSignInLib() {
        return (
            <FireBaseAuth fireBaseAuth={firebaseApp.auth()} uiConfig={this.uiConfig}/>
        )
    }

    // mind the context of the function, this.renderSignIn would lose context 
    renderSignIn() {
        return (
            <Siginin auth={firebaseApp.auth()} uiConfig={this.uiConfig}/>
        );
    }
}

export default App;
