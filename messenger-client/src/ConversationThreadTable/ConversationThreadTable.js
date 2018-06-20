// @flow
import React, { Component } from 'react';
import ConversationThreadRow from '../ConversationThreadRow/ConversationThreadRow';

import './ConversationThreadTable.css';

type Props = {
    receivers: string[],
    activeReceiver: ?string,
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

    handleThreadSeleted = function(name: string) {
        // TODO: naming is kinda weird
        // figure it out: is string type in flow interpreted as Object in plain js
        console.log(`thread with user ${name} selected`);
        this.props.onActiveReceiverChange(name);
    }.bind(this);

    // TODO: make it scrollable
    // TODO: attach key to each children, efficient?
    // TODO: hover style for row
    render() {
        // console.log(this.props.receivers, this.props.activeReceiver);
        return (
            <div className="row">
                <div> Threads going on.. </div>
                <div>
                    {
                        this.props.receivers.map(name => {
                            let classNames = ['hoverable', 'thread-row'];
                            if (name === this.props.activeReceiver) {
                                classNames.push('teal lighten-5');
                            }
                            classNames = classNames.join(' ');
                            return <div key={name} onClick={() => this.handleThreadSeleted(name)}
                                className={classNames}>
                                <ConversationThreadRow 
                                    receiverName={name} 
                                    onThreadDelete={this.handleThreadDelete}/> 
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ConversationThreadTable;