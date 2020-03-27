import React from "react";
import { FormControl, Avatar} from '@material-ui/core';

import SideMenuHeader from './SideMenuHeader'

import qrcode from '../../../../assets/images/QR-code.png'

class YouChamp extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
        
    }
    
    render() {
        return (
       
        <div className="sidebar-wrap">
            <SideMenuHeader title="My youchamp CODE" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents">
                <div className="settings-item">
                    <FormControl fullWidth={true}>
                    <Avatar
                    className="avatar-img"
                    alt="Remy Sharp"
                    src={require("../../../../assets/images/groupIcon.png")} 
                    />
                    </FormControl>               
                </div>
                <h2>SAMANTHA</h2>
                <p className="text-center">My youchamp Code Show your firends your youchamp code and they cna scan it to pay you without the hassle of giving them your account or phone number</p> 
                
            
            <div className="chat-settings">
                <img src={qrcode} style={{"margin":"auto"}}></img>            
            </div>
            <div className="row text-center"><a className="text-center" onClick={(e) => {this.props.setSideMenuPage('privacy')}} style={{"fontSize":"10px","cursor":"pointer"}}>View our privacy policy for information on how we handle your sensitive information</a></div>
        </div>
        </div>
        );
    }
}

export default YouChamp
