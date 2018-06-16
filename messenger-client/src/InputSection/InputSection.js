// @flow
import React, { Component } from 'react';

type Props = {
    onInputTextChange: (string) => void,
    inputText: string
}

/*
* A text input bar for inputting the name of the other side for the conversation
*/
class InputSection extends Component<Props> {
    render() {
        return (
            <form>
                <input type="text" placeholder="Add a friend..." 
                    value={this.props.inputText} />
            </form>
        );
    }
}

export default InputSection;