import React, { Component } from 'react';

import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loadMessage: "Loading...",
        }
        this.firebase = this.props.firebase;
      }
    
      render() {
        console.log('Signin rendered');
        return (
          <div className="container">
            <div id="auth-container"></div>
            <div> {this.state.loadMessage} </div>
          </div>
        );
      }
    
      componentDidMount() {
        const ui = new firebaseui.auth.AuthUI(this.firebase.auth());
      
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
          // Will use popup for ID Providers sign-in flow instead of the default, redirect.
          signInFlow: 'default',
          signInSuccessUrl: '/',
          // TODO: custom sign-in method
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            this.firebase.auth.EmailAuthProvider.PROVIDER_ID
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          ],
          // Terms of service url.
          tosUrl: 'unknown/'
        };
    
        ui.start("#auth-container", uiConfig);
      }
}

export default Signin;