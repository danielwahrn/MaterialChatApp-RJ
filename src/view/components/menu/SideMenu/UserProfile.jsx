import React from "react";
import {  Avatar, FormControl, Button, TextField,Fab,List, ListItem, ListItemText,ListItemSecondaryAction, Typography } from '@material-ui/core';
import DatePicker from 'react-mobile-datepicker';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SideMenuHeader from './SideMenuHeader';
import DropButton from '../../sharedUI/DropButton';

class UserProfile extends React.Component {
    
    constructor() {
        super();
        this.state = {
            groupImage: require("../../../../assets/images/user.png"),
            currency:'AUD',
            gender:'FEMALE',
            name: 'Susie Peak', 
            phone: '+61 0407 138 267',
            email: 'susie@gmail.com',
            nickname: 'Apple Juice',
            checked: false,
            view:'detail',
        };
        this.anchorRef = React.createRef();
        this.anchorRef1 = React.createRef();
        this.anchorRef2 = React.createRef();
        this.anchorRef3 = React.createRef();
        
        this.currencyitems = [
            {
                id: 0,
                avatar: '',
                label: <><label onClick={(event) => {this.changeCurrency(event,'AUD')}} className="icon-file-add text-center" >AUD</label></>,
                secondicon: ''
            },
            {
                id: 1,
                avatar: '',
                label: <><label onClick={(event) => {this.changeCurrency(event,'USD')}} className="icon-file-add text-center" >USD</label></>,
                secondicon: ''
            },
            {
                id: 2,
                avatar: '',
                label: <><label onClick={(event) => {this.changeCurrency(event,'INR')}} className="icon-file-add text-center" >INR</label></>,
                secondicon: ''
            },
            {
                id: 3,
                label: <><label onClick={(event) => {this.changeCurrency(event,'SGD')}} className="icon-file-add text-center" >SGD</label></>,
                secondicon: ''
            }
        ]
        this.genderitems = [
            {
                id: 0,
                avatar: '',
                label: <><label onClick={(event) => {this.changeGender(event,'FEMALE')}} className="icon-file-add text-center" >FEMALE</label></>,
                secondicon: ''
            },
            {
                id: 1,
                avatar: '',
                label: <><label onClick={(event) => {this.changeGender(event,'MALE')}} className="icon-file-add text-center" >MALE</label></>,
                secondicon: ''
            },
            {
                id: 2,
                avatar: '',
                label: <><label onClick={(event) => {this.changeGender(event,'OTHER')}} className="icon-file-add text-center" >OTHER</label></>,
                secondicon: ''
            }
        ]
        this.items = [           
            {
                id: 0,
                avatar: '',
                label:  <><input accept="image/*" style={{ display: 'none' }} id="view-button-file" type="file" onChange={(event) => {this.mediaChange(event)}} /><label className="icon-file-add text-center" htmlFor="view-button-file">View Photo</label></>,
                secondicon: ''
            },
            {
                id: 1,
                avatar: '',
                label: <><input accept="image/*" style={{ display: 'none' }} id="take-button-file" type="file" onChange={(event) => {this.mediaTake(event)}} /><label className="icon-file-add text-center" htmlFor="take-button-file">Take Photo</label></>,
                secondicon: ''
            },
            {
                id: 2,
                avatar: '',
                label: <><input accept="image/*" style={{ display: 'none' }} id="upload-button-file" type="file" onChange={(event) => {this.mediaUpload(event)}} /><label className="icon-file-add text-center" htmlFor="upload-button-file">Upload Photo</label></>,
                secondicon: ''
            },
            {
                id: 3,
                avatar: '',
                label: <><label onClick={(event) => {this.mediaRemove(event)}} className="icon-file-add text-center" >Remove Photo</label></>,
                secondicon: ''
            },
        ]
    }
    
    update(e) {
        this.setState({
            name: this.refs.name.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
            nickname : this.refs.nickname.value
        });
    }

    handleSave(e) {
        this.props.close_form();
    }

    changeCurrency(e, currency){
        this.setState({currency})
    }

    changeGender(e, gender){
        this.setState({gender})
    }

    mediaRemove(event){
        console.log('test')
        this.setState({
            groupImage: require("../../../../assets/images/user.png")
          })
    }

    mediaChange(event){
        this.setState({
            groupImage: URL.createObjectURL(event.target.files[0])
          })
    }

    mediaTake(event){
        
    }

    mediaUpload(event){
        
    }
    
    render() {
        
        return (
        <>
        {this.state.view === 'detail' ?(<>
        <div className="sidebar-wrap">
            <SideMenuHeader title="MY PROFILE" titleClassName="detailsTitle color-blue"  close_form={this.props.close_form}/>
            <div className="chatdetails-main sidebar-content menu-contents ">
                <form>
                    <div className="chat-settings">
                        <FormControl fullWidth={true}>
                           
                            <Avatar
                                className="avatar-img"
                                alt="Remy Sharp"
                                src={this.state.groupImage} 
                            />
                            
                            <DropButton 
                                buttonicon={<Fab size="small"  ref={this.anchorRef} aria-label="add" style={{ "width": "25px","height": "25px","minHeight": "25px","position":"absolute","top":"72%","left":"60%","backgroundColor":"black" }}>
                                                <AddIcon fontSize="inherit" className="color-white" />                                
                                            </Fab>} 
                                items = {this.items}
                                anchorRef = {this.anchorRef}
                                
                                />
                        </FormControl>
                    </div>
                    <List dense >
                        <ListItem>
                        <div className="chat-settings settings-item">
                            <TextField                                
                                id="target_amount"
                                label="YOUR NAME"
                                placeholder={this.state.name}
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                            </div>
                        </ListItem>
                        <ListItem>
                        <div className="chat-settings settings-item">
                            <TextField                                
                                id="target_amount"
                                label="YOUR EMAIL"
                                placeholder={this.state.email}
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        </ListItem>                    
                        <ListItem>
                        <div className="chat-settings settings-item">
                            <TextField                                
                                id="target_amount"
                                label="YOUR NUMBER"
                                placeholder={this.state.phone}
                                fullWidth
                                margin="normal"
                                InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        </ListItem>                        
                        <ListItem>
                        <div className="chat-settings settings-item">
                            <ListItemText primary={<Typography variant="caption" color="primary" > DEFAULT CURRENCY</Typography>}
                                secondary={<Typography variant="body2" >{this.state.currency}</Typography>}
                                className="second-dropdown"
                            /> 
                            <DropButton 
                                buttonicon={<Fab size="small" ref={this.anchorRef1}   aria-label="add" style={{ "width": "20px","height": "20px","minHeight": "20px","zIndex":"10000", "backgroundColor":"#888B8D"}}>
                                                <ExpandMoreIcon fontSize="inherit" className="color-white" />                                
                                            </Fab>} 
                                items = {this.currencyitems}
                                anchorRef = {this.anchorRef1}                               
                                
                            />
                        </div>
                        </ListItem>                        
                        <ListItem>
                        <div className="chat-settings settings-item">
                            <ListItemText primary={<Typography variant="caption" color="primary" > YOUR GENDER</Typography>}
                                secondary={<Typography variant="body2" >{this.state.gender}</Typography>}
                                className="second-dropdown"
                            /> 
                            <DropButton 
                                buttonicon={<Fab size="small"  ref={this.anchorRef2} aria-label="add" style={{ "width": "20px","height": "20px","minHeight": "20px", "zIndex":"10000", "backgroundColor":"#888B8D"}}>
                                                <ExpandMoreIcon fontSize="inherit" className="color-white" />                                
                                            </Fab>} 
                                items = {this.genderitems}
                                anchorRef = {this.anchorRef2}
                            />
                        </div>
                        </ListItem>                        
                        <ListItem>
                        <div className="chat-settings settings-item">
                        
                            <ListItemText primary={<Typography variant="caption" color="primary" > YOUR DATE OF BIRTH</Typography>}
                                secondary={<Typography variant="body2" >03/10/1980</Typography>}
                                className="second-dropdown"
                            /> 
                            <DropButton 
                                buttonicon={<Fab size="small"  ref={this.anchorRef3} aria-label="add" style={{ "width": "20px","height": "20px","minHeight": "20px", "zIndex":"10000", "backgroundColor":"#888B8D"}}>
                                                <ExpandMoreIcon fontSize="inherit" className="color-white" />                                
                                            </Fab>} 
                                
                                anchorRef = {this.anchorRef3}
                                datepicker = {true}
                            />
                        </div> 
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
        </div>
        </>):('')}
        </>
        );
    }
}

export default UserProfile
