import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class DashBoard extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    constructor() {
        super();
        this.state = {
            isSignedIn: undefined
        }
    }

    render() {
        console.log(this.state);
        alert("DashBoard:", this.props.auth.currentUser);
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
        // TODO: log out feature
        return (
            <div >
                <button onClick={() => this.signOut()}> sign out </button>
                <p> {this.state.isSignedIn === undefined ?
                        "Undefined" : (this.state.isSignedIn ? 
                            "Signed in" : "Signed out")} 
                </p>
            </div>
        )
    }

    componentDidMount() {        
        this.unregisterAuthSubscriber = this.props.auth.onAuthStateChanged((user) => {
            console.log(user);
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