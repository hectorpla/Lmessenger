// @flow
import React, { Component } from 'react';
import './ConversationThreadRow.css';

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
            <React.Fragment>
                <span> {this.props.receiverName} </span>
                <i className="hoverable material-icons right" 
                    onClick={this.handleThreadDelete}>close</i>
            </React.Fragment>
        )
    }
}

export default ConversationThreadRow;