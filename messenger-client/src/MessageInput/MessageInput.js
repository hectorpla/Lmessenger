// @flow
import React, { Component } from 'react';

type Props = {
    onMessageInputSubmit: (string) => void
}

class MessageInput extends Component<Props> {
    handleFormSubmit = function(e: SyntheticEvent<>) {
        e.preventDefault();
    }

    handleKeyUp = function(e: SyntheticKeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.keyCode === 13) {
            // TODO: submit message to the server
            let message = e.currentTarget.value;
            this.props.onMessageInputSubmit(message);
        }
    }.bind(this);

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" onKeyUp={this.handleKeyUp}/>
            </form>
        );
    }
}

export default MessageInput;