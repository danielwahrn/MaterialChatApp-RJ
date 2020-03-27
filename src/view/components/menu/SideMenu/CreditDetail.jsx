import React from "react";
import { IconButton, Avatar, Grid, FormControl, Button, TextField,Fab,List,ListItemAvatar, ListItem, ListItemText,ListItemSecondaryAction, Typography } from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FolderIcon from '@material-ui/icons/Folder';
import CreditCard from '../../sharedUI/CreditCard'
import { DashboardModel } from '../../DashboardModel';

class CreditDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           item: ''
        };
    }
    removeCard(id, e) {
        e.preventDefault();
       // DashboardModel.close('remove')(e); 
        document.getElementById('dashboardmenumodal').remove();
       document.body.classList.remove('dashboard-modal-open');
     //   this.props.remove(id);
    }
    render() {
        return (
        <>
            <form>
                
                <div className="settings-item ">
                <FormControl fullWidth={true}>
                    <Grid container>
                        <Grid item xs={6} style={{"margin":"auto"}}>
                            <CreditCard item={this.props.item} />
                        </Grid>
                    </Grid>
                </FormControl>
                </div>
                
                <div className="row ">
                    <p className="text-center" style={{"color":"#307FE2"}}>STANDARD DEBIT MASTERCARD</p>
                    <p className="text-center">Payment Card</p>
                </div>
                <List>
                <div className="settings-item">
                    <FormControl fullWidth={true}>
                    <ListItem>
                        <ListItemText primary={<Typography variant="caption" color="primary" > YOUR DEFAULT CARD</Typography>}
                            secondary={<Typography variant="body2" color="textPrimary">Mastercard***333</Typography>}
                        /> 
                    </ListItem>
                    
                    <ListItem>
                        <TextField                                
                            id="target_amount"
                            label="NAME ON CARD"
                            placeholder="Name on Card"
                            fullWidth
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </ListItem>
                    
                    <ListItem>
                        <TextField                                
                            id="target_amount"
                            label="CARD NUMBER"
                            placeholder="Card Number"
                            fullWidth
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </ListItem>

                    <ListItem>
                        <TextField                                
                            id="target_amount"
                            label="EXPIRY DATE"
                            placeholder="mm/yy"
                            fullWidth
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </ListItem>

                    <ListItem>
                        <TextField                                
                            id="target_amount"
                            label="CVV"
                            placeholder="CVV"
                            fullWidth
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </ListItem>
                    
                    </FormControl>
                </div>
                
                </List>
                <div className="form-bottom">
                    <Button                            
                        size="small"
                        className="btn btn-small btn-rounded bg-red color-white"
                        variant="contained"
                        onClick={() => {DashboardModel.openModel('remove');}}>
                            Remove Card
                    </Button>
                
                <div className="row text-center"><a style={{"fontSize":"10px"}}>View our privacy policy for information on how we handle your sensitive information</a></div>
                </div>
            </form>
            <DashboardModel id="remove" outsideClickClose={false} removeUnmount={false}>
            <div className="model-content">
                <h1>Hey there champ!</h1>
                <p>Do you want to remove this card?</p>
                <div className="button-right">
                    <Button variant="contained" className="btn bg-orange btn-rounded"
                        onClick={(e) => {e.preventDefault();this.removeCard(1, e) }}>
                    Yes
                    </Button>
                </div>
            </div>
        </DashboardModel>
        </>
        );
    }
}

export default CreditDetail
