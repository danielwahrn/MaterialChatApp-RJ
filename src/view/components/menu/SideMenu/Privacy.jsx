import React from "react";
import { FormControl, Avatar} from '@material-ui/core';

import SideMenuHeader from './SideMenuHeader'

class Privacy extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
        
    }
    
    render() {
        return (
        <div className="sidebar-wrap">
            <SideMenuHeader title="Privacy" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents">
                <div className="settings-item">
                    
                <p className="text-center">here is privacy</p> 
                </div>
            </div>
        </div>
        );
    }
}

export default Privacy
