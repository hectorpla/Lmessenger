// @flow
import React, { Component } from 'react';
import { Socket } from 'socket.io-client';
import ConversationThreadPanel from '../ConversationThreadPanel.js/ConversationThreadPanel';
import MessagePanel from '../MessagePanel/MessagePanel';

type Props = {
    user: string,
    sokect: Socket
}

type States = {
    currentActiveReceiver: ?string
}

/*
* The great containter containing thread panel and chat panel, vertically split
*/
class ControlPanel extends Component<Props, States> {
    state = {
        receivers: [],
        currentActiveReceiver: undefined
    }

    handleActiveReceiverChange = function(name: string) {
        console.log(`ControlPanel: active receiver changes to`, name);
        this.setState({currentActiveReceiver: name});
    }.bind(this);

    render() {
        // TODO: add CSS style lib: materialized css?
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <ConversationThreadPanel
                            activeReceiver={this.state.currentActiveReceiver}
                            onActiveReceiverChange={this.handleActiveReceiverChange}/>
                    </div>
                    {/* TODO: check socket */}
                    <div className="col s8">
                        <MessagePanel user={this.props.user}
                            receiver={this.state.currentActiveReceiver}
                            socket={this.props.sokect} /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlPanel;