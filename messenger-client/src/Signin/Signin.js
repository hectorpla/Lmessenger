import React, { Component } from 'react';
// import { Browserhistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

class Signin extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        uiConfig: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
          loadMessage: "Loading Sign UI...",
        }
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
        // TODO: act purely to props
        const ui = new firebaseui.auth.AuthUI(this.props.auth);
        ui.start("#auth-container", this.props.uiConfig);
    }
}

export default Signin;