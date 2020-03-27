import React from "react";
import { FormControl, Button, TextField } from '@material-ui/core';

import SideMenuHeader from './SideMenuHeader'
class Bank extends React.Component {
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
        <SideMenuHeader title="BANK DETAILS" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents dashboard-form">
                <form>
                    
                    <div className="chat-settings ">
                        <FormControl fullWidth={true}>
                            <TextField
                                
                                id="target_amount"
                                label="ACCOUNT NAME"
                                placeholder="Account Name"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="chat-settings "> 
                        <FormControl fullWidth={true}>
                            <TextField                                
                                id="target_amount"
                                label="BANK CODE"
                                placeholder="BSB/IFSC/IBAN...etc"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="chat-settings ">
                        <FormControl fullWidth={true}>
                            <TextField
                                
                                id="target_amount"
                                label="ACCOUNT NUMBER"
                                placeholder="Card Number"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
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

export default Bank
