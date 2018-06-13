import React, { Component } from 'react';
import firebase from './firebase'; // should do only once in the app
import { Switch, Route } from 'react-router-dom';

import Siginin from './Signin/Signin';
import DashBoard from './DashBoard/DashBoard';

class App extends Component {
    constructor() {
        super();
        this.auth = firebase.auth();
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => <DashBoard auth={this.auth}/>} />
                <Route exact path='/signin' render={() => <Siginin firebase={firebase}/>} />
                <Route to="/signin" />
            </Switch>
        )
    }
}

export default App;
