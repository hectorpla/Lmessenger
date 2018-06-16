// @flow
import React, { Component } from 'react';

type Props = {
    messages: string[]
}

/*
* A component showing rows of messages
* TODO: extend the each row to a new component
*/
class MessageTab extends Component<Props> {

    render() {
        // reference for key attribute of each element in an array of DOMs:
        // As a last resort, you can pass an item’s index in the array as a key. 
        // This can work well if the items are never reordered, 
        // but reorders will be slow.
        return (
            <div className="row">
                {this.props.messages.map( (msg, index) => 
                    <p key={index}> {msg} </p>
                )}
            </div>
        );
    }
}

export default MessageTab;