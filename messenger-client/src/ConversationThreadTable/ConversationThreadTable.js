// @flow
import React, { Component } from 'react';
import ConversationThreadRow from '../ConversationThreadRow/ConversationThreadRow';

type Props = {
    receivers: string[],
    onActiveReceiverChange: (string) => void
}

/*
* A colume representing the ongoing conversation threads
*/
class ConversationThreadTable extends Component<Props> {
    
    // TODO: implement delete row
    handleThreadDelete = function(name: string) {
        
    }.bind(this);

    render() {
        return (
            <div>
                <div> Threads going on </div>
                <div>
                    {this.props.receivers.map(name => 
                        <ConversationThreadRow receiverName={name} 
                            onThreadDelete={this.handleThreadDelete} />
                    )}
                </div>
            </div>
        );
    }
}

export default ConversationThreadTable;