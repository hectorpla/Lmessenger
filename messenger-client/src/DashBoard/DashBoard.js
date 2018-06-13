import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            signStatus: 'signed in'
        }
    }

    render() {
        return (
            this.props.auth.currentUser ?
            (<div>
                <p> {this.state.signStatus} </p>
            </div>)
            :
            (<Redirect to="/signin"/>)
        );
    }
}

export default DashBoard;