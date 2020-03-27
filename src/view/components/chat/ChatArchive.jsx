import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Link, Paper, InputBase } from '@material-ui/core';
import ChatUsersList from "../sharedUI/ChatUsersList";
import SettingsMenu from "../menu/settings/SettingsMenu";
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const image_path = require('../../../assets/images/user-img.png');
let users = [
    {
        id: 1,
        name: "Lynda Tanaka",
        image: image_path
    },
    {
        id: 2,
        name: "Super Friends",
        image: image_path,
        isGroup: true
    },
    {
        id: 3,
        name: "Susie Peak",
        image: image_path

    },
    {
        id: 4,
        name: "Alick Buscarido",
        image: image_path
    },
    {
        id: 5,
        name: "Alisha Warr",
        image: image_path
    },
    {
        id: 6,
        name: "Barbara Tankard",
        image: image_path
    },
    {
        id: 7,
        name: "Beau Jones",
        image: image_path
    },
    {
        id: 8,
        name: "Blair Rusby",
        image: image_path
    },
    {
        id: 9,
        name: "Chariotte Zeartz",
        image: image_path
    },
    {
        id: 10,
        name: "Cooper Cho",
        image: image_path
    }
];
class ChatArchive extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            };
    }
    render() {
        return (
            <>
                <div className="sidebar-wrap">
                    <AppBar className="header-top no-shadow sidebar-header" position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <Avatar alt="Remy Sharp" src={require("../../../assets/images/user.png")} />
                            </IconButton>
                            <Typography variant="body2" >CHATS</Typography>
                            <div className="desktopIcons">
                                <IconButton edge="end" color="inherit">
                                    <NotificationsNoneIcon />
                                    {/* <img src={require('../../assets/images/icons/bell.svg')} alt="" /> */}
                                </IconButton>
                                <SettingsMenu setSideMenuPage={this.props.setSideMenuPage}/>

                            </div>
                        </Toolbar>
                    </AppBar>
                    <Paper  square  className="menu-contents-wrap sidebar-content" padding="0">
                        <ChatUsersList {...this.props} users={users} search={true} showArchive={true} />
                    </Paper>
                </div>
            </>
        );
    }
}
export default ChatArchive;