// @flow
import React, { Component } from 'react';

type Props = {
    receiverName: string,
    onThreadDelete: (string) => void
}

class ConversationThreadRow extends Component<Props> {

    handleThreadDelete = function() {
        console.log(`ConverstationThreadRow: delete`);
        this.props.onThreadDelete(this.props.receiverName);
    }.bind(this);

    render() {
        return (
            <div>
                <span> {this.props.receiverName} </span>
                {/* pull right */}
                <span onClick={this.handleThreadDelete}> del </span>
            </div>
        )
    }
}

export default ConversationThreadRow;