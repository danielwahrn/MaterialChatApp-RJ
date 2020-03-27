import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SdStorageIcon from '@material-ui/icons/SdStorage';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { IconButton, Paper, Popper, MenuItem, MenuList, ClickAwayListener, ListItemText,ListItemAvatar,ListItemSecondaryAction,ListItem,List } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { SettingMenuModal } from '../../SettingMenuModal';
const businessIcon = require('../../../../assets/images/icons/business.svg');
const creditIcon = require('../../../../assets/images/icons/credit.svg');
const notificationIcon = require('../../../../assets/images/icons/notification.svg');
const passwordIcon = require('../../../../assets/images/icons/password.svg');
const pinIcon = require('../../../../assets/images/icons/pin.svg');
const storageIcon = require('../../../../assets/images/icons/storage.svg');
const tipsIcon = require('../../../../assets/images/icons/tips.svg');
const youchampIcon = require('../../../../assets/images/icons/youchamp.svg');
const bankIcon = require('../../../../assets/images/icons/bank.svg');
let menuitem = [
    {
        id: 1,
        page: "credit",
        label: "Credit Card Details(to pay)",
        icon:<img src={creditIcon} alt="icon" />
    },
    {
        id: 2,
        page: "bank",
        label: "Bank Details (to get paid)",
        icon:<img src={bankIcon} alt="icon" />
    },
    {
        id: 3,
        page: "password",
        label: "Change Password",
        icon:<img src={passwordIcon} alt="icon" />
    },
    {
        id: 4,
        page: "pin",
        label: "Pin",
        icon:<img src={pinIcon} alt="icon" />
    },
    {
        id: 5,
        page: "youchamp",
        label: "My youchamp Code",
        icon:<img src={youchampIcon} alt="icon" />
    },
    {
        id: 6,
        page: "business",
        label: "Business Account",
        icon:<img src={businessIcon} alt="icon" />
    },
    {
        id: 7,
        page: "tips",
        label: "Useful Tips",
        icon:<img src={tipsIcon} alt="icon" />
    },
    /* {
        id: 8,
        page: "dashboard",
        label: "Notifications",
        icon:<NotificationsIcon />
    },
    {
        id: 9,
        page: "dashboard",
        label: "Storage and Data Usage",
        icon:<SdStorageIcon />
    } */
];

class SettingsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            open:false
            };
        this.anchorRef = React.createRef();
    }
    handleToggle = (e) => {
        SettingMenuModal.openModel('settingmenumodal');
        this.setState((state) => ({
            open: !state.open
        }))
    }
    handleClose = (e) => {
       SettingMenuModal.close('settingmenumodal')(e);
        this.setState((state) => ({
            open: false,
        }))
       
    }
    handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            this.handleClose(event);
        }
        
    }

    handlePage(page,e) {
        document.getElementById('settingmenumodal').remove();
        document.body.classList.remove('dashboard-modal-open');
        this.handleClose(e);
        this.props.setSideMenuPage(page);
        
    }

    handleBackPage(e) {
        
        this.handleClose(e);
        this.props.setSideMenuPage('');
    
    }

    componentWillMount() {       
        var modal = document.getElementById('settingmenumodal');
        if( modal !== null)
        {
            console.log('removed')
            document.getElementById('settingmenumodal').remove();
        }
    
    }
    
    render() {
        return (
            <>
                <div className="">
                    <IconButton
                        ref={this.anchorRef}
                        
                        aria-controls={this.state.open ? 'menu-list-grow' : undefined}
                        onClick={this.handleToggle}
                        edge="end" className="color-black" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className="setting-menu">
                    <SettingMenuModal id="settingmenumodal" outsideClickClose={false} removeUnmount={false}>
                    <Popper open={this.state.open} anchorEl={this.anchorRef.current} role={undefined} placement="bottom-end" transition disablePortal>
                            
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                <List dense  id="menu-list-grow" onKeyDown={this.handleListKeyDown}>
                                <div className="setting-hover">
                                <Link underline="none" onClick={(e) => {this.handlePage('userprofile',e)}} >
                                    <ListItem >
                                            <ListItemAvatar>
                                                <Avatar alt="Samantha" src={require("../../../../assets/images/groupIcon.png")}  />
                                            </ListItemAvatar>
                                            <ListItemText primary={<Typography variant="subtitle2" color="primary" > Samantha</Typography>}
                                                secondary={<Typography variant="caption" >Edit Profile</Typography>}
                                                
                                            /> 
                                            <ListItemSecondaryAction><ArrowForwardIosIcon color="primary" /></ListItemSecondaryAction>
                                        </ListItem> 
                                    </Link>
                                    </div>
                                        {menuitem.map(item => {                                    
                                        return <div className="setting-hover"><Link underline="none" onClick={(e) => {this.handlePage(item.page,e)}} key={item.id}><ListItem >
                                                <ListItemAvatar><ListItemIcon>{item.icon}</ListItemIcon></ListItemAvatar>
                                                <ListItemText primary={<Typography variant="subtitle2" color="primary" gutterBottom > {item.label}</Typography>} />                                            
                                                <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete"><ArrowForwardIosIcon color="primary" /></IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem></Link></div>
                                        }) }
                                        <div className="setting-hover">
                                        <Link underline="none" onClick={(e) => {this.handleBackPage(e)}}>
                                        <ListItem  >
                                            <ListItemAvatar><ListItemIcon><img src={notificationIcon} alt="icon" /></ListItemIcon></ListItemAvatar>
                                            <ListItemText primary={<Typography variant="subtitle2" color="primary" gutterBottom > Notifications</Typography>} />  
                                            <ListItemSecondaryAction><ArrowForwardIosIcon color="primary" /></ListItemSecondaryAction>
                                        </ListItem>
                                        </Link>
                                        </div>
                                        <div className="setting-hover">
                                        <Link underline="none" onClick={(e) => {this.handleBackPage(e)}}><ListItem  >
                                            <ListItemAvatar><ListItemIcon><img src={storageIcon} alt="icon" /></ListItemIcon></ListItemAvatar>
                                            <ListItemText primary={<Typography variant="subtitle2" color="primary" gutterBottom > Storage and Data Usage</Typography>} />  
                                            <ListItemSecondaryAction><ArrowForwardIosIcon color="primary" /></ListItemSecondaryAction>
                                        </ListItem> 
                                        </Link>
                                        </div>
                                    </List>
                                </ClickAwayListener>
                            </Paper>
                           
                    </Popper>
                    </SettingMenuModal>
                </div>
            </>
        );
    }
}
export default SettingsMenu;
