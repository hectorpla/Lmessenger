// @flow
import React, { Component } from 'react';

type Props = {
    onInputTextChange: (string) => void,
    onReceiverAddition: (string) => void,
    inputText: string
}

/*
* A text input bar for inputting the name of the other side for the conversation
*/
class ConversationThreadInputSection extends Component<Props> {
    handleInputSubmit = function(e: SyntheticKeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.keyCode === 13) {
            this.props.onReceiverAddition(e.currentTarget.value);
        }
    }.bind(this);

    handleTextChange = function(e: SyntheticEvent<HTMLInputElement>) {
        this.props.onInputTextChange(e.currentTarget.value);
    }.bind(this);

    render() {
        return (
            <div className="row">
                <form onSubmit={(e: SyntheticEvent<>) => e.preventDefault()}>
                    <input type="text" placeholder="Add a friend..." 
                        value={this.props.inputText}
                        onKeyUp={this.handleInputSubmit}
                        onChange={this.handleTextChange} />
                </form>
            </div>
        );
    }
}

export default ConversationThreadInputSection;