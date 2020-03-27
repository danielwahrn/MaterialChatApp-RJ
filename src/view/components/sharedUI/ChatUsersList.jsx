import React from 'react';
import {
    List, ListItem, ListItemText, ListItemAvatar, Avatar,
    Typography, ListItemSecondaryAction
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Toolbar, IconButton, Paper } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class ChatUsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchString: '',
            filteredUsers: [],
            selectedUsers: []
        };
    }

    componentDidMount() {
        this.setState({
            users: this.props.users,
            filteredUsers: this.props.users
        });
    }
    handleChange(event) {
        this.setState({
            searchString: event.target.value,
            filteredUsers: this.setFilterdUsers()
        });
        console.log(this.state.searchString);
        console.log(this.state.filteredUsers);
    }

    setFilterdUsers() {
        if (this.state.searchString) {
            return this.state.users.filter(user => user.name.includes(this.state.searchString))
        } else {
            return this.state.users
        }
    }

    selectUser(selecteditem) {
        let { selectedUsers } = this.state;
        var hasSelectedItem = selectedUsers.find(function (item) {
            return item.id === selecteditem.id ? true : false;
        });
        if (typeof hasSelectedItem === 'undefined' && !hasSelectedItem) {
            selectedUsers.push(selecteditem);
            this.setState({ selectedUsers });
        }
    }
    deselectUser(selecteditem) {
        let { selectedUsers } = this.state;
        var hasSelectedItem = selectedUsers.find(function (item) {
            return item.id === selecteditem.id ? true : false;
        });
        if (typeof hasSelectedItem !== 'undefined' && hasSelectedItem) {
            let filteredArray = selectedUsers.filter(item => item.id !== selecteditem.id)
            this.setState({ selectedUsers: filteredArray });
        }
    }


    showListItem(item, key) {
        var isGroup = (typeof item.isGroup !== 'undefined' && item.isGroup === true) ? true : false;
        return <ListItem key={key}   >
            <Link to={"/dashboard/" + (isGroup ? 'groupchat' : 'chat') + '/' + item.id}>
                <ListItemAvatar>
                    <Avatar alt="" src={require("../../../assets/images/user.png")} />
                </ListItemAvatar>
                <ListItemText id={"user_" + item.id} primary={item.name}
                    secondary={<Typography variant="body2" >Chat with Champy! to find out more about youchamp.</Typography>}
                />
                <ListItemSecondaryAction>
                    <Typography variant="body2" component="span" >11:28am</Typography>
                </ListItemSecondaryAction>
                {(isGroup) ? (
                    <IconButton className="group-more" aria-label="more" size="small">
                        <ExpandMoreIcon fontSize="inherit" />
                    </IconButton>
                ) : ('')}
            </Link>
        </ListItem>
    }

    render() {

        return (
            <>

                {this.props.search ?
                    (<Toolbar className="search-toolbar bg-gray">
                        <Paper className="search-form" component="form">
                            <IconButton type="submit" aria-label="search" size="small">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                id="s"
                                name="s"
                                placeholder="Search For Friends"
                                value={this.state.searchString}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Paper>
                    </Toolbar>) : ('')
                }
                {this.props.showArchive ?
                    (<Toolbar className="archive-toolbar bg-gray">
                        <p className="archive-title">Chats Archive</p>
                        <Link to="#" className="ml-auto archive-count">
                            <span>5</span>
                            <KeyboardArrowRightIcon />
                        </Link>
                        {/* <img src={require('../../assets/images/icons/right-arrow.svg')} alt="" /> */}
                    </Toolbar>) : ('')
                }
                <div className="userlist-wrap-inner">
                    <List className="userlist chat-user-list" >
                        {this.props.frequent && this.state.searchString === '' ?
                            (<div key={0} className="list-main">
                                <h3 className="color-black">Frequently contacted</h3>
                                {this.props.frequent.map((item, j) => this.showListItem(item, j))}
                            </div>) : ('')}
                        {this.state.filteredUsers.map((item, j) => this.showListItem(item, j))}
                    </List>

                </div>
            </>
        );
    }
}

export default ChatUsersList;