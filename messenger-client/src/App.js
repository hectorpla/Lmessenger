import React, { Component } from 'react';
import firebase from './firebase';
import firebaseui from 'firebaseui';

import 'firebaseui/dist/firebaseui.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadMessage: "Loading...",
    }
    this.authRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div ref={this.authRef} id="auth-container"></div>
        <div> {this.state.loadMessage} </div>
      </div>
    );
  }

  componentDidMount() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
  
    const that = this;
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          return true;
        },
        uiShown: function() {
          that.setState({loadMessage: "loaded successfully"})
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'default',
      signInSuccessUrl: 'www.bing.com',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: 'www.google.com'
    };

    ui.start("#auth-container", uiConfig);
  }
}

export default App;
