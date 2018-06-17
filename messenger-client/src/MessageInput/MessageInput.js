// @flow
import React, { Component } from 'react';

import type { Socket } from 'socket.io-client';

type Props = {
    user: string,
    receiver: string,
    socket: Socket,
    onMessageInputSubmit?: (string) => void
}

class MessageInput extends Component<Props> {
    handleFormSubmit = function(e: SyntheticEvent<>) {
        e.preventDefault();
    }

    handleKeyUp = function(e: SyntheticKeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.keyCode === 13) {
            let message = e.currentTarget.value;
            // TODO: not neccessary need this in the real logic
            if (this.props.onMessageInputSubmit) {
                this.props.onMessageInputSubmit(message);
            }
            this.sendMessage(message);
        }
    }.bind(this);

    // TODO: should the event name be local?
    sendMessage(message: string) {
        const {user, receiver} = this.props;
        this.props.socket.emit("message", user, receiver, message);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="type message..." onKeyUp={this.handleKeyUp}/>
            </form>
        );
    }
}

export default MessageInput;