// @flow
import React, { Component } from 'react';
import ConversationThreadRow from '../ConversationThreadRow/ConversationThreadRow';

type Props = {
    receivers: string[],
    onActiveReceiverChange: (string) => void,
    onReceiverDelete: (string) => void
}

/*
* A colume representing the ongoing conversation threads
*/
class ConversationThreadTable extends Component<Props> {
    
    // a delegate that go uppper
    handleThreadDelete = function(name: string) {
        this.props.onReceiverDelete(name);
    }.bind(this);

    // TODO: make it scrollable
    // TODO: attach key to each children
    render() {
        return (
            <div>
                <div> Threads going on </div>
                <div>
                    {this.props.receivers.map(name => 
                        <ConversationThreadRow receiverName={name} 
                            onThreadDelete={this.handleThreadDelete}/>
                    )}
                </div>
            </div>
        );
    }
}

export default ConversationThreadTable;