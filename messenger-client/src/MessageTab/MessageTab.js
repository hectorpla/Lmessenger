// @flow
import React, { Component } from 'react';

type Props = {
    receiver: ?string,
    messages: ?string[]
}

/*
* A component showing rows of messages
* TODO: extend the each row to a new component
*/
class MessageTab extends Component<Props> {

    render() {
        console.log("MessageTab render: receiver", this.props.receiver);

        // reference for key attribute of each element in an array of DOMs:
        // As a last resort, you can pass an item’s index in the array as a key. 
        // This can work well if the items are never reordered, 
        // but reorders will be slow.
        // TODO: make the view scrollable
        // TODO: add timestamp
        return ( // TODO: test the logic
            (!this.props.receiver && <div> Select/add a friend to begin </div>)
            || (this.props.messages &&
            <div className="row">
                <h3> Talking to {this.props.receiver} </h3>
                {this.props.messages.map( (msg, index) => 
                    <p key={index}> {msg} </p>
                )}
            </div>)
        );
    }
}

export default MessageTab;