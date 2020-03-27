import React from "react";
import { FormControl, Button, TextField, IconButton,InputAdornment,Badge, List, ListItem } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PasswordField from '../../sharedUI/form/Password';

import SideMenuHeader from './SideMenuHeader'

class Password extends React.Component {
    constructor() {
        super();
        
        this.state ={
            
        }
        
    }
    handleSave(e) {
        this.props.close_form();
    }
    render() {
        return (
        <>
        <div className="sidebar-wrap">
        <SideMenuHeader title="CHANGE PASSWORD" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents dashboard-form">
                <form>
                    <List dense>
                        <ListItem>
                    <div className="chat-settings ">
                        <Badge color="secondary" badgeContent={'i'} >
                            <PasswordField 
                                id="newPassword" 
                                placeholder="Current Password" 
                                label="CURRENT PASSWORD" 
                                helpercolor={'error'} 
                                helpertext="incorrect password"
                                error = {true}
                                visibility={false}
                                />
                        </Badge>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="chat-settings "> 
                        <Badge  >
                            <PasswordField 
                                id="newPassword" 
                                placeholder="New Password" 
                                label="NEW PASSWORD" 
                                visibility={true}/>
                        </Badge>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="chat-settings ">
                        <Badge color="secondary" badgeContent={'i'} >                  
                            <PasswordField 
                                id="repeatPassword" 
                                placeholder="Repeat New Password" 
                                label="REPEAT NEW PASSWORD" 
                                helpercolor={'error'} 
                                helpertext="please try again" 
                                visibility={true}
                                error = {true}/>
                        </Badge>
                    </div> 
                    </ListItem>
                    </List>
                    <div className="form-bottom">
                        <Button                            
                            size="small"
                            className="btn btn-small bg-green btn-rounded color-white"
                            variant="contained"
                            onClick={(e)=>{this.handleSave()}}>
                        Save
                        </Button>
                        <div className="row"><a onClick={(e) => {this.props.setSideMenuPage('privacy')}} style={{"fontSize":"10px","cursor":"pointer"}}>View our privacy policy for information on how we handle your sensitive information</a></div>
                    </div>
                </form>
            </div>
        </div>
        </>
        );
    }
}

export default Password