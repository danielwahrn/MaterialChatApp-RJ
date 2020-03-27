import React, { Component } from "react";
import { Avatar, Link } from '@material-ui/core';
import renderHTML from 'react-render-html';

class GroupMemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderMessage(message, i) {
        const { member, text } = message;
        var color = member.color;

        return (
            <Link key={i} className="group-mem-list" to="/dashboard/group-chat" >
                <Avatar className="avatar" alt="Remy Sharp"
                    src={(member.avatar !== '') ? member.avatar : require("../../../../assets/images/user.png")} />
                <div className="pl-15">
                    <h3 style={{ color: color }}>{member.username}</h3>
                    <p>{renderHTML(text)}</p>
                </div>
            </Link>
        );
    }

    render() {
        const { messages } = this.props;
        return (
            <>
                <div className="group-member">
                    {messages.map((m, i) => this.renderMessage(m, i))}
                </div>
                <div ref={el => { this.el = el; }} />
            </>
        );
    }
}

export default GroupMemberList;
