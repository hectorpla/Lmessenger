// @flow
import React, { Component } from 'react';
import ConversationThreadInputSection from '../ConversationThreadInputSection/ConversationThreadInputSection';
import ConversationThreadTable from '../ConversationThreadTable/ConversationThreadTable';
import './ConversationThreadPanel.css';

import _ from 'lodash';

type Props = {
    activeReceiver: ?string,
    onActiveReceiverChange: (string) => void
}

type States = {
    inputText: string,
    receivers: string[]
}

/*
* A colume containing enterbar, thread table
*/
class ConversationThreadPanel extends Component<Props, States> {
    state = {
        inputText: "",
        receivers: []
    }

    handleInputTextChange = function(text: string) {
        this.setState({inputText: text})
    }.bind(this);

    handleReceiverAddtion = function(text: string) {
        const receivers = this.state.receivers;
        
        if (receivers.includes(text)) {
            // TODO: check duplication in UI
            console.log("addition: duplicatino!")
            return;
        }
        receivers.push(text);
        this.setState({receivers});
        // activate the added thread
        this.handleActiveReceiverChange(text);
    }.bind(this);

    handleReceiverDelete = function(name: string) {
        const receivers = this.state.receivers;
        _.remove(receivers, (toRemove) => toRemove === name);
        this.setState({receivers})
    }.bind(this);

    handleActiveReceiverChange = function(name: string) {
        this.props.onActiveReceiverChange(name);
    }.bind(this);

    render() {
        return (
            <div className="container blue darken-1">
                <ConversationThreadInputSection inputText={this.state.inputText} 
                    onInputTextChange={this.handleInputTextChange}
                    onReceiverAddition={this.handleReceiverAddtion} />
                <ConversationThreadTable
                    receivers={this.state.receivers}
                    activeReceiver={this.props.activeReceiver}
                    onActiveReceiverChange={this.handleActiveReceiverChange}
                    onReceiverDelete={this.handleReceiverDelete} />
            </div>
        );
    }
}

export default ConversationThreadPanel;