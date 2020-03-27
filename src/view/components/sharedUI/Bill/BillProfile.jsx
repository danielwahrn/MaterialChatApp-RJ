import React from "react";
import {  Avatar, FormControl, Button, TextField,Fab,List, ListItem, ListItemText,ListItemSecondaryAction, Typography, Link } from '@material-ui/core';
import DatePicker from 'react-mobile-datepicker';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DropButton from '../../sharedUI/DropButton';

class BillProfile extends React.Component {
    
    constructor() {
        super();
        this.state = {
            groupImage: require("../../../../assets/images/user.png"),
            currency:'AUD',
            gender:'FEMALE',
            name: 'Susie Peak',             
            checked: false,
            view:'detail',
        };
        this.anchorRef = React.createRef();
        
        
        
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
        
    }

    handleSave(e) {
        this.props.goBack();
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
                    <List>
                        <ListItem>
                        <div className="settings-item">
                            <Typography component="p" color="primary">COLLECTING FOR</Typography>
                            <Typography component="label" color="primaryText">James' Birthday</Typography>
                        </div>
                        </ListItem>
                        <ListItem>
                        <div className="chat-settings">
                            <Typography component="p" color="primary">GROUP MEMBERS</Typography>
                        </div>
                        </ListItem>
                    </List>
                       
                    
                    <List>
                    {this.props.members.map(item => (
                    <ListItem key={item.id} >
                        <Avatar src={item.image} />
                        <Typography variant="subtitle2" color="textPrimary" gutterBottom style={{"margin-left":"5px"}}> {item.name}</Typography>
                        <ListItemSecondaryAction>
                            <Link component="button" color="error" className="closeRedIcon"></Link>
                        </ListItemSecondaryAction>
                    </ListItem>          
                    ))}
                    </List>     
                    <div className="form-bottom">
                        <Button                            
                            size="small"
                            className="btn btn-small bg-green btn-rounded color-white"
                            variant="contained"
                            onClick={(e)=>{this.handleSave()}}>
                        Done
                        </Button>
                    </div>
                </form>
       
        </>
        );
    }
}

export default BillProfile
