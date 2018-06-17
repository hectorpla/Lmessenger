// @flow
import React, { Component } from 'react';
import type { Socket } from 'socket.io-client';

import MessageTab from '../MessageTab/MessageTab'
import MessageInput from '../MessageInput/MessageInput';

type Props = {
    user: string,
    receiver?: string,
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
        // TODO: check the input component logic
        return (
            <div className="container">
                <MessageTab receiver={this.props.receiver} messages={this.state.messages} />
                { this.props.receiver && this.props.socket &&
                <MessageInput user={this.props.user} receiver={this.props.receiver}
                    socket={this.props.socket}
                    onMessageInputSubmit={this.handleMessageAdded} />
                }
            </div>
        );
    }
}

export default MessagePanel;