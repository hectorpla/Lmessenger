// @flow
import React, { Component } from 'react';
import InputSection from '../InputSection/InputSection';
import ConversationThreadTable from '../ConversationThreadTable/ConversationThreadTable';

type Props = {
    receivers: string[],
    onActiveReceiverChange: (string) => void
}

type States = {
    inputText: string
}

/*
* A colume containing enterbar, thread table
*/
class ConversationThreadPanel extends Component<Props, States> {

    handleInputTextChange = function(text: string) {
        this.setState({inputText: text})
    }.bind(this);

    // TODO: implementation: inform the parent component
    handleActiveReceiverChange = function(name: string) {
        throw "not yet implemented";
    }.bind(this);

    render = () => {
        <div className="container">
            <InputSection inputText={this.state.inputText} 
                onInputTextChange={this.handleInputTextChange} />
            <ConversationThreadTable
                onActiveReceiverChange={this.handleActiveReceiverChange}
                receivers={this.props.receivers} />
        </div>
    }
}

export default ConversationThreadPanel;