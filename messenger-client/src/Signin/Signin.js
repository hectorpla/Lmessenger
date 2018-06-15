// @flow
import React, { Component } from 'react';
import firebase from 'firebase/app';

import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

type Props = {
    auth: firebase.auth.Auth,
    uiConfig: Object
}

type States = {
    loadMessage: string
}

class Signin extends Component<Props, States> {

    state = {
        loadMessage: "Loading Sign UI...",
    }
    
    render() {
        // console.log('Signin rendered');
        return (
            <div className="container">
                <div id="auth-container"></div>
                <div> {this.state.loadMessage} </div>
            </div>
        );
    }

    componentDidMount() {
        // TODO: act purely to props? internal states change of the auth instance
        const ui = new firebaseui.auth.AuthUI(this.props.auth);
        ui.start("#auth-container", this.props.uiConfig);
    }
}

export default Signin;