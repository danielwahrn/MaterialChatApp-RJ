import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

class SidebarHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <AppBar className={"header-top sidebar-header " + this.props.className} position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={this.props.backAction}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <Typography variant="body2" className={this.props.titleClassName} >{this.props.title}</Typography>
                    </Toolbar>
                    {this.props.children}
                </AppBar>
            </>
        );
    }
}
export default SidebarHeader;