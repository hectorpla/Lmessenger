// @flow
import React, { Component } from 'react';
import type { Socket } from 'socket.io-client';

import MessageTab from '../MessageTab/MessageTab';
import MessageInput from '../MessageInput/MessageInput';

type Message = string; // might be more complex type

type Props = {
    user: string,
    receiver: ?string,
    socket: ?Socket
}

// used to hold the state, but the message bucket is decided by the receiver only
// type States = {
//     threadToMessages: {[string]: Message[] | void}
// }

/*
* This component should take charge of the flow of the conversation
*/
class MessagePanel extends Component<Props> {
    // state = {
    //     threadToMessages: {}
    // }
    
    /*
    * a table to cache the messages in different threads
    * TODO: considering maintaining a map for caching users input data
    */
    threadToMessages: {[string]: Message[] | void} = {}

    pushToThread(receiver: string, ...messages: Message[]) {
        // non-idiomatic: changing state 
        if (!this.threadToMessages[receiver]) {
            this.threadToMessages[receiver] = messages;
        } else {
            this.threadToMessages[receiver].push(...messages);
        }
    }

    handleMessageAdded = function(message: Message) {
        console.log("MessagePanel handleMessageAdded:", message);
        const receiver = this.props.receiver;
        
        if (receiver) { // TODO: neccessary check? is there a better way
            this.pushToThread(receiver, message);
            this.setState({}); // refresh, it doesn't work calling without argument
        }
    }.bind(this);

    render() {
        const receiver = this.props.receiver;
        console.log(receiver);
        if (receiver) {
            this.pushToThread(receiver);
        }
        // TODO: check the input component logic
        return (
            <div className="container">
                <MessageTab receiver={receiver} 
                    messages={!receiver? undefined : this.threadToMessages[receiver]} />
                { 
                    receiver && this.props.socket &&
                    <MessageInput user={this.props.user} 
                        receiver={receiver}
                        socket={this.props.socket}
                        onMessageInputSubmit={this.handleMessageAdded} />
                }
            </div>
        );
    }
}

export default MessagePanel;