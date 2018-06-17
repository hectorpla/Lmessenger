// @flow
import React, { Component } from 'react';
import { Socket } from 'socket.io-client';
import ConversationThreadPanel from '../ConversationThreadPanel.js/ConversationThreadPanel';
import MessagePanel from '../MessagePanel/MessagePanel';

type Props = {
    user: string,
    sokect: ?Socket
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
        this.setState({currentActiveReceiver: name});
    }.bind(this);

    render() {
        // TODO: add CSS style lib: materialized css?
        return (
            <div className="container">
                {/* TODO: left for messenger thread panel; right for chat panel (3:7) */}
                <div className="row">
                    <div className="col s3">
                        <ConversationThreadPanel
                            onActiveReceiverChange={this.handleActiveReceiverChange}/>
                    </div>
                    {/* chat panel */}
                    <div className="col s9">
                        <MessagePanel user={this.props.user}
                        currentActiveReceiver={this.state.currentActiveReceiver}
                        socket={undefined} /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlPanel;