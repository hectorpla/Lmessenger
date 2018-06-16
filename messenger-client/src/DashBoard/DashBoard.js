// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import ControlPanel from '../ControlPanel/ControlPanel';

type Props = {
    auth: firebase.auth.Auth
}

type States = {
    isSignedIn: ?boolean
}

class DashBoard extends Component<Props, States> {

    state = {
        isSignedIn: undefined
    };
    unregisterAuthSubscriber: () => void


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

    signOut() {
        this.props.auth.signOut()
            .then(() => console.log("user signed out"))
            .then((err) => console.log(err));
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
                <ControlPanel  />
            </div>
        )
    }

    componentDidMount() {        
        this.unregisterAuthSubscriber = this.props.auth.onAuthStateChanged((user) => {
            console.log(user);

            // TODO: Connect or disconnect websocket to the server
            if (user) {

            } else {

            }

            this.setState({isSignedIn: !!user})
        }, (error) => {
            console.log(error);
        });
    }

    componentWillUnmount() {
        this.unregisterAuthSubscriber();
    }
}

export default DashBoard;