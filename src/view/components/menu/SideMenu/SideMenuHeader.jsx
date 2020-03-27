import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/KeyboardArrowLeft';

import { Link } from 'react-router-dom'

class SideMenuHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
        
    }
    
    render() {
        return (
       
        <div className="">
            <AppBar className="header-top" position="static" >
                <Toolbar>
                    <IconButton
                    edge="start"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.props.close_form}             
                    >
                    <ArrowForwardIosIcon color="primary" />
                    </IconButton>
                    <Typography variant="body2" className={this.props.titleClassName}>{this.props.title}</Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}

export default SideMenuHeader