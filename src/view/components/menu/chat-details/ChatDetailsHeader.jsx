import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import BackIcon from '@material-ui/icons/ArrowBackIos';

class ChatDetailsHeader extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
    return (
        <AppBar color="default" className={"header-top "+this.props.classNames} position="static">
            <Toolbar>
                <IconButton edge="end" size="small" className="color-black" color="inherit" aria-label="menu" onClick={this.props.closeAction}>
                  {typeof this.props.icon !== 'undefined' && this.props.icon === 'back'?
                    <BackIcon />: <CloseIcon /> }
                </IconButton>
                <Typography className="ml-24 detailsTitle" variant="body2">{this.props.title}</Typography>
            </Toolbar>
        </AppBar>
    );
  } 
}

export default ChatDetailsHeader
