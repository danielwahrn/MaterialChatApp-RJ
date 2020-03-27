import React from 'react';
import {
    Typography,
    ListItemSecondaryAction,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@material-ui/core';


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <List className="chat-user-list" >
                    {[0, 1, 2, 3].map(value => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            <ListItem key={value} button onClick={this.props.showChat}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={require("../../../assets/images/user.png")} />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`CHAMPY! ${value + 1}`}
                                    secondary={<Typography variant="body2" >Chat with Champy! to find out more about youchamp.</Typography>}
                                />
                                <ListItemSecondaryAction>
                                    <Typography variant="body2" component="span" >11:28am</Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>
            </>
        );
    }
}
export default UserList;