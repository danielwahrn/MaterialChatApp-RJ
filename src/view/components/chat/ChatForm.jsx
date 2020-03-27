import React, { Component } from "react";
import { AppBar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';

import { faSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <>
                <AppBar className="chat-form" position="static" color="default" style={{ top: 'auto', bottom: '0' }}>
                    <form >
                        <IconButton className="add-button" aria-label="add" >
                            <AddIcon />
                        </IconButton>
                        <IconButton aria-label="face">
                            <FontAwesomeIcon icon={faSmile} />
                        </IconButton>
                        <TextField
                            onChange={this.handleChange('message').bind(this)}
                            className="message-input"
                            id="message"
                            placeholder="Type your message"
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <IconButton aria-label="send" className="sent-button" >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </IconButton>
                    </form>

                </AppBar>
            </>
        );
    }
}

export default ChatForm;