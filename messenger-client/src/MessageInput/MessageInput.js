// @flow
import React, { Component } from 'react';

import type { Socket } from 'socket.io-client';

type Props = {
    user: string,
    receiver: string,
    socket: Socket,
    onMessageInputSubmit?: (string) => void
}

// TODO: currently using uncontrolled form, switch back when necessary
// type States = {
//     inputText: string
// }

class MessageInput extends Component<Props> {
    inputRef = React.createRef();

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
            // TODO: send message
            // this.sendMessage(message);
        }
    }.bind(this);

    // TODO: should the event name be local?
    sendMessage(message: string) {
        const {user, receiver} = this.props;
        this.props.socket.emit("message", user, receiver, message);
    }

    // access the current props via this.props and compare it with the incoming nextProps
    // the component is already mounted when this mothod is called
    componentWillReceiveProps(nextProps: Props) {
        if (this.props.receiver !== nextProps.receiver) {
            this.inputRef.current.value = ""; // solve the complaint by Flow
        }
    }

    // official: ref updates happen before componentDidMount or componentDidUpdate lifecycle hooks.
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" ref={this.inputRef}
                    placeholder="type message..." 
                    onKeyUp={this.handleKeyUp}/>
            </form>
        );
    }
}

export default MessageInput;