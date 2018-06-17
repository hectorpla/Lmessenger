// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ControlPanel from '../ControlPanel/ControlPanel';

import firebase from 'firebase/app';
import SocketIOClient from 'socket.io-client';

type Props = {
    auth: firebase.auth.Auth
}

type States = {
    isSignedIn: ?boolean   
}

/*
* This component takes care of: 1. checking auth, 2: creating socket connection
* when signed in
*/
class DashBoard extends Component<Props, States> {

    state = {
        isSignedIn: undefined,
    };

    socket: ?SocketIOClient.Socket;
    unregisterAuthSubscriber: () => void;

    signOut() {
        this.props.auth.signOut()
            .then(() => console.log("user signed out"))
            .then((err) => console.log(err));
    }

    componentDidMount() {        
        this.unregisterAuthSubscriber = this.props.auth.onAuthStateChanged((user) => {
            console.log(user);

            // TODO: Connect or disconnect websocket to the server
            if (user) {
                // for test
                this.socket = 1; // SocketIOClient();
            } else {
                this.socket.disconnect();
            }

            this.setState({isSignedIn: !!user})
        }, (error) => {
            console.log(error);
        });
    }

    renderDashBoard() {
        // TODO: compose chat room component
        return (
            <div className="container">
                <div className="row">
                    <button onClick={() => this.signOut()}> sign out </button>
                    <span> {this.state.isSignedIn === undefined ?
                            "Undefined" : (this.state.isSignedIn ? 
                                "Signed in" : "Signed out")} 
                    </span>
                </div>
                <hr />
                {/* TODO: assign socket, check name   */}
                {this.state.isSignedIn && this.socket &&
                    <ControlPanel user={this.props.auth.currentUser.displayName}
                        sokect={this.socket} />}
            </div>
        )
    }
    
    render() {
        // console.log(this.state);
        // alert("DashBoard:", this.props.auth.currentUser);
        return (
            this.state.isSignedIn === undefined || this.state.isSignedIn ?
            this.renderDashBoard()
            :
            <Redirect to="/signin"/>
        );
    }

    componentWillUnmount() {
        this.unregisterAuthSubscriber();
    }
}

export default DashBoard;