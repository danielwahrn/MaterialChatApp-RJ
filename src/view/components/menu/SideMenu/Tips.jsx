import React from "react";
import {  Avatar, FormControl,ListItem, ListItemText,Typography,List} from '@material-ui/core';
import SideMenuHeader from './SideMenuHeader'
import SwitchCustom from '../../sharedUI/form/SwitchCustom';
let items = [
   {
        id: 1,
        primary: "GROUP CREATION",
        secondary: "Create New Group Add an image , name it, and give it a description, then add your friends to start sharign, caring and chatting!",
    },
    {
        id: 2,
        primary: "EXPENSE CREATION",
        secondary: "Create New Expense Create a new expense in this group. You can add an image, name it and add a description, then choose how the costs will be split before you add who shares that expense!",
    },
    {
        id: 3,
        primary: "EQUAL SPLIT",
        secondary: "Who is part of this expense?\nSelecting a user will automatically calculate what they owe!",
    },
    {
        id: 4,
        primary: "NO LIMIT",
        secondary: "Who will be contributing? \nSelecting a user will allow them to add how much they would like to contribute!",
    },
    {
        id: 5,
        primary: "UNEQUAL SPLIT - YOU CHOOSE",
        secondary: "Who is part of this expense?\nAdd or edit the percentages or amount owed by each person!",
    },
    {
        id: 6,
        primary: "UNEQUAL SPLIT - THEY CHOOSE",
        secondary: "Selecting a user will allow them to add how much they need to pay1",
    },
    {
        id: 7,
        primary: "PAYER SELECTION",
        secondary: "You're the current payer, if you didn't pay, select who did below!",
    },
    {
        id: 8,
        primary: "PAYMENTS",
        secondary: "Make Payments List of users who you owe and who owes you, clear all or some of your outstanding amounts with a single transfer.\nSelect who you would like to pay and choose the payment type.\n Use the remind button to send an SMS to some or all the people who owe you.\n Champy has done the work for you!",
    },
    {
        id: 9,
        primary: "MAKE PAYMENTS - PAY A USER",
        secondary: "Here is a breakdown of the expenses that you have created that means you owe the amount shown. You can pay everything in one transfer to wipe the slate clean, or you can choose to pay some items directly.\nIf you pay individual items, youchamp will recalculate the outstanding amounts.\n Champy loves to work hard for you!",
    },
    {
        id: 10,
        primary: "SETTINGS",
        secondary: "Update your profile picture, username and email address!",
    },
    {
        id: 11,
        primary: "CREDIT CARD DETAILS",
        secondary: "Update your credit card details to make sure you can create groups and pay your friends!",
    },
    {
        id: 12,
        primary: "BANK DETAILS",
        secondary: "Update your bank details to make sure you can receive your funds!",
    },
    {
        id: 13,
        primary: "PASSWORD",
        secondary: "Change your account password that you use to log in on all devices!",
    },
    {
        id: 14,
        primary: "PIN",
        secondary: "Change your PIN that you use to access the app or update your PIN settings!",
    },
    {
        id: 15,
        primary: "USEFUL TIPS",
        secondary: "View and turn on/off the tips on each screen that explain how youchamp works!",
    }
]
class Tips extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
        
    }
    componentDidMount() {
    }
    
    render() {
        
        return (                  
        <div className="sidebar-wrap">        
            <SideMenuHeader title="TIPS" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents">
                <div className="settings-item">
                    <FormControl fullWidth={true}>
                        <Avatar
                        className="avatar-img"
                        alt="Remy Sharp"
                        src={require("../../../../assets/images/groupIcon.png")} 
                        />
                        
                    </FormControl>    
                    <Typography component="span"  variant="body2" color="primary" fullWidth><p className="text-center">SAMANTHA</p> </Typography>                    
                </div>
                
                <p className="text-center">Do you need help? Just switch on/off services tabs as and when you need help.</p>
                <List className="chat-user-list" >
                {items.map(item => { return(
                    <ListItem key={item.id}>
                        <SwitchCustom label={<ListItemText  primary={<Typography component="span"  variant="body2" color="primary">{item.primary} </Typography>}  
                        secondary={<Typography  variant="body2" >{item.secondary} </Typography>} />} onChange={this.handleChange} name="mute" /> 
                    </ListItem>)
                })}  
                </List>
                <div className="row"><a onClick={(e) => {this.props.setSideMenuPage('privacy')}} style={{"fontSize":"10px","cursor":"pointer"}}>View our privacy policy for information on how we handle your sensitive information</a></div>
            </div>
            
        </div>
        );
    }
}

export default Tips
