import React from "react";
import {FormControl, Button, TextField, Typography, Badge } from '@material-ui/core';
import SideMenuHeader from './SideMenuHeader'
import SwitchCustom from '../../sharedUI/form/SwitchCustom';
import PasswordField from '../../sharedUI/form/Password';
class Pin extends React.Component {
    constructor() {
        super();
        this.state = {
            view:'detail',
        };
        
    }
    handleSave(e) {
        this.props.close_form();
    }
    render() {
        return (
        <>
        {this.state.view === 'detail' ?(<>
        <div className="sidebar-wrap">
        <SideMenuHeader title="PIN" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents dashboard-form">

                <form>                    
                    <SwitchCustom label={<Typography component="span"  variant="body2" color="primary">REQUIRE PIN TO POEN WEB APP? </Typography>}  
                         onChange={this.handleChange} name="mute" /> 
                    <SwitchCustom label={<Typography component="span"  variant="body2" color="primary">REQUIRE PIN TO PAY? </Typography>}  
                         onChange={this.handleChange} name="mute" /> 
                    <div className="chat-settings">
                        <Badge color="secondary" badgeContent={'i'} >
                            <PasswordField 
                                id="newPassword" 
                                placeholder="Current Pin" 
                                label="CURRENT PIN" 
                                helpercolor={'error'} 
                                helpertext="incorrect password"
                                error = {true}
                                visibility={false}/>
                        </Badge>
                    </div>
                    <div className="chat-settings">
                            <PasswordField 
                                id="newPassword" 
                                placeholder="NEW PIN" 
                                label="New PIN" 
                                visibility={true}/>
                    </div>
                    <div className="chat-settings">
                        
                            <PasswordField 
                                id="newPassword" 
                                placeholder="REPEAT NEW PIN" 
                                label="Repeat New PIN" 
                                visibility={true}/>

                    </div>
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
        </>):('')}
        </>
        );
    }
}

export default Pin