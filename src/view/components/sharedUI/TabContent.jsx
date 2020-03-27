import React, { Component } from 'react';
import TabList from './TabList';
import { ChromePicker } from 'react-color';
import { Avatar, AppBar, Toolbar, Typography, IconButton, Paper, Button, TextField, FormLabel } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ColorPicker from './ColorPicker/ColorPicker';
import Gallery from './Gallery/Gallery';

class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="sidebar-wrap">
                <AppBar className="header-top bg-red color-white" position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={this.props.onClose}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <Typography variant="body2">Chat Background</Typography>
                    </Toolbar>
                </AppBar>
                <div className="container up sidebar-content">
                    <TabList>
                        <div label="Media" className="tab-content">
                            <div className="mediatab">
                                <h3>This Month</h3>
                                <Gallery />
                            </div>
                        </div>
                        <div label="camera" className="tab-content">
                            <div className="camera-main">
                                
                            </div>
                        </div>
                        <div label="Photos" className="tab-content">
                            <div className="mediatab">
                                <h3>This Month</h3>
                                <Gallery />
                            </div>
                        </div>
                        <div label="Color" className="tab-content">
                            <div className="custom-colorpicker">
                                <div className="position-relative">
                                    <ColorPicker />
                                </div>
                            </div>
                        </div>
                    </TabList>
                </div>
            </div>
        );
    }
}

export default TabContent;
