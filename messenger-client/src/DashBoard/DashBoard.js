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
            signStatus: 'signed in'
        }
    }

    render() {
        alert(this.props.auth.currentUser);
        return (
            this.props.auth.currentUser ?
            this.renderDashBoard()
            :
            <Redirect to="/signin"/>
        );
    }

    signOut() {
        this.auth.signOut()
            .then(() => console.log("user signed out"))
            .then((err) => console.log(err));
    }

    renderDashBoard() {
        // TODO: log out feature
        return (
            <div >
                <button onClick={this.signOut}> sign out </button>
                <p> {this.state.signStatus} </p>
            </div>
        )
    }

    // good timing?
    // componentDidMount() {
    //     this.auth = this.props.auth;
    //     this.auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({signStatus: "signed in"})
    //         } else {
    //             this.setState({signStatus: "signed out"});
    //         }
    //     }, (error) => {
    //         console.log(error);
    //     });
    // }
}

export default DashBoard;