import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { IconButton, Paper, Popper, MenuItem, MenuList, ClickAwayListener, ListItemText,ListItemAvatar,ListItemSecondaryAction,ListItem,List } from '@material-ui/core';
import DatePicker from './MobileDatePicker';
class DropButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {             
            open:false
            };
        //this.anchorRef = React.createRef();
        this.menuitem = props.items;
        this.buttonicon = props.buttonicon;
    }
    handleToggle = () => {
        
        this.setState((state) => ({
            open: !state.open
        }))
    }
    handleClose = () => {
        
        this.setState((state) => ({
            open: false,
        }))
    }
    componentdidMoount() {
        this.setState((state) => ({
            open: false,
        }))
    }
    handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            this.handleClose();
        }
        
    }
    mediaRemove(event){
        console.log('test')
        
    }
    render() {
        return (
            <>
                <div onClick={this.handleToggle} >                 
                    {this.buttonicon}
                </div>
                
                <Popper open={this.state.open} anchorEl={this.props.anchorRef.current}  placement="bottom-start" transition disablePortal style={{"zIndex":"100000"}}>
                    <Paper style={{"backgroundColor":"#f6f6f6"}}>
                        <ClickAwayListener onClickAway={this.handleClose}>
                        {this.props.datepicker?<DatePicker />:
                            <List  id="profiledrop" onKeyDown={this.handleListKeyDown}>                                        
                                {this.props.items.map(item => {                                    
                                return <ListItem key={item.id}>
                                        {item.avatar}
                                        <ListItemText primary={<Typography variant="body2" color="textPrimary">{item.label}</Typography>} />                                            
                                        {item.secondicon}
                                    </ListItem>
                                    
                                }) }
                                
                            </List>
                            }
                        </ClickAwayListener>
                    </Paper>                           
                </Popper>
                
            </>
        );
    }
}
export default DropButton;
