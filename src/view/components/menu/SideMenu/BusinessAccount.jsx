import React from "react";
import {  Avatar, FormControl, Button, TextField,ListItem, ListItemAvatar, ListItemText,ListItemSecondaryAction, Typography,List} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import SideMenuHeader from './SideMenuHeader'
import { DashboardModel } from '../../DashboardModel';
class BusinessAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            setup:0
        };
        
    }
    componentDidMount() {
       
        DashboardModel.openModel('business');
    }

    handleSave(e) {
        this.props.close_form();
    }
    setBusinessAccount(val, e) {        
        
        document.getElementById('dashboardmenumodal').remove();
        document.body.classList.remove('dashboard-modal-open');
          if(val === 0)
            {
                this.props.close_form();
                
            }
        else
         this.setState({setup:1})
    }
    render() {
        return (
            <>       
            <div className="sidebar-wrap">
        {this.state.setup===1 ?(<>
            
            <SideMenuHeader title="CREATE A BUSINESS PROFILE" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents dashboard-form">
                <form>
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <Avatar
                            className="avatar-img"
                            alt="Remy Sharp"
                            src={require("../../../../assets/images/groupIcon.png")} 
                            />
                            <p><b>Business</b> Created and manage your business profiles to accept payments directly in youchamp</p>
                            
                        </FormControl>
                        
                    </div>
                    <div className="row text-center">
                        <Button                            
                            size="small"
                            className="btn btn-small bg-blue btn-rounded color-white"
                            variant="contained">
                            POS
                        </Button>
                        </div>
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField                                
                                id="target_amount"
                                label="ABN"
                                placeholder="xxxxxxxxxxxxxxxx"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item"> 
                        <FormControl fullWidth={true}>
                            <TextField                                
                                id="target_amount"
                                label="BUSINESS NAME"
                                placeholder="champy"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField                                
                                id="target_amount"
                                label="BUSINESS ADDRESS"
                                placeholder="xxxxxxxxxxxx"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div> 
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField
                               
                                id="target_amount"
                                label="BUSINESS PHONE NUMBER"
                                placeholder="+61 000 000 000"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField                               
                                id="target_amount"
                                label="BUSINESS EMAIL ADDRESS"
                                placeholder="champy@gmail.com"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField                               
                                id="target_amount"
                                label="BUSINESS MAIN CONTACT PERSON"
                                placeholder="xxxxx"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField                               
                                id="target_amount"
                                label="ACCOUNT NAME"
                                placeholder="Samantha"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item">
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
                    <div className="settings-item">
                        <FormControl fullWidth={true}>
                            <TextField                               
                                id="target_amount"
                                label="ACCOUNT NUMBER"
                                placeholder="***00000"
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </div>
                    <div className="settings-item">
                        <h3>BUSINESS USERS</h3>
                        
                    </div>
                    <List dense className="chat-user-list" >
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={require("../../../../assets/images/user.png")} />
                            </ListItemAvatar>
                            <ListItemText  primary="Samantha" />
                            <ListItemSecondaryAction>
                                <Typography variant="caption" component="span" >Business Owner</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={require("../../../../assets/images/user.png")} />
                            </ListItemAvatar>
                            <ListItemText  primary="Terry Bartoli" />
                            <ListItemSecondaryAction>
                                <Typography variant="caption" component="span" >Group Admin</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={require("../../../../assets/images/user.png")} />
                            </ListItemAvatar>
                            <ListItemText  primary="Susie Peak" />
                            <ListItemSecondaryAction>
                                <Typography variant="caption" component="span" ></Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        </List>
                    <div className="text-center">
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
            
            </>):(
        <div className="sidebar-wrap">

                <DashboardModel id="business" outsideClickClose={false} removeUnmount={false}>
                <div className="model-content">
                    <h1>Hey there champ!</h1>
                    <p>It looks like you haven't got any business profiles set up yet. If you would like to set one up now, tap <b>GO FOR IT</b>, otherwise, tap <b>NO THANKS</b> to go back to the Settings</p>
                    <div className="button-right">
                        <Button variant="contained" className="btn bg-orange btn-rounded"
                            onClick={(e) => { this.setBusinessAccount(1, e); }}>Go For It</Button>
                        <Button variant="contained" className="btn bg-gray btn-rounded"
                            onClick={(e) => {  this.setBusinessAccount(0,e); }}>No Thanks</Button>
                    </div>
                </div>
            </DashboardModel>
            </div>
            )}
        </div> 
        
        </>
        );
    }
}

export default withRouter(BusinessAccount)
