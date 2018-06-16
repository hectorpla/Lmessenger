// @flow
import React, { Component } from 'react';
import type { Socket } from 'socket.io-client';

import MessageTab from '../MessageTab/MessageTab'
import MessageInput from '../MessageInput/MessageInput';

type Props = {
    currentActiveReceiver: ?string,
    socket: ?Socket
}

type States = {
    messages: string[] // might be a more complex type
}

/*
* This component should take charge of the flow of the conversation
*/
class MessagePanel extends Component<Props, States> {
    state = {
        messages: []
    }

    handleMessageAdded = function(message: string) {
        console.log(message);
        this.state.messages.push(message);
        this.setState({messages: this.state.messages})
    }.bind(this);

    render() {
        return (
            <div className="container">
                <MessageTab messages={this.state.messages} />
                <MessageInput onMessageInputSubmit={this.handleMessageAdded} />
            </div>
        );
    }
}

export default MessagePanel;