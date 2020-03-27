import React, { Component } from "react";
import {Button,Avatar} from '@material-ui/core';

class GroupMembers extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    renderItem(member, i) {
        return ( 
            <Button 
                component="Link"
                className="spacing-lr pt-20 color-black" 
                color="inherit" fullWidth 
                onClick={() => this.props.onMemberClick(member.id)}>
                <Avatar className="avatar" alt=""
                    src={(member.image)} />
                    {member.name}
                <div className="designation ml-auto">{member.designation}</div>
            </Button>
        );
    }
   
    render() {
        const {members} = this.props;
        return (
            <>
            <div className="members-list">
                {typeof members !== 'undefined' && members.length > 0 && 
                    members.map((m, i) => this.renderItem(m, i))}
            </div>
            </>
        );
    }
}

export default GroupMembers;