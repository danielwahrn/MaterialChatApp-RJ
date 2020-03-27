import React, { Component } from "react";
import { Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import renderHTML from 'react-render-html';

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ChatForm from "../../chat/ChatForm";

class GroupMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });

    };
    renderMessage(message, i) {
        const { member, text } = message;
        const { currentMember } = this.props;
        const messageFromMe = member.id === currentMember.id;
        const messageFromOther = member.id === 3;

        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message" &&
            messageFromOther ? "Messages-message OtherMember" : "Messages-message";

        return (
            <li key={i} className={className}>
                <Avatar className="avatar" alt="Remy Sharp"
                    src={(member.avatar !== '') ? member.avatar : require("../../../../assets/images/user.png")} />
                <div className="Message-content">
                    <div className="username">
                        {member.username}
                    </div>
                    <div className="text">{renderHTML(text)}
                        <span className="delivered-msg"><FontAwesomeIcon icon={faCheck} /></span>
                    </div>
                    <div className="date">
                        {member.date}
                    </div>
                </div>
            </li>
        );
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.el.scrollIntoView({ behavior: 'smooth' });
    };
    render() {
        const { messages } = this.props;
        return (
            <>
                <div className="Messages-wrap">
                    <div className="Messages-list with-form grpchatsetting">
                        <ul>
                            {messages.map((m, i) => this.renderMessage(m, i))}
                        </ul>
                        <div ref={el => { this.el = el; }} />
                    </div>
                    <IconButton aria-label="scroll" size="medium" className="scroll-down" onClick={this.scrollToBottom.bind(this)}>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
                <ChatForm />
            </>
        );
    }
}

export default GroupMessages;