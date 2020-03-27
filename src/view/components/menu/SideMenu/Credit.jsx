import React from "react";
import { IconButton, Link, Grid, Avatar, FormControl, Button, TextField,Fab,List,ListItemAvatar, ListItem, ListItemText,ListItemSecondaryAction, Typography } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FolderIcon from '@material-ui/icons/Folder';
import SideMenuHeader from './SideMenuHeader'
import CreditCard from '../../sharedUI/CreditCard'
import CreditDetail from './CreditDetail'
const mycardIcon = require('../../../../assets/images/icons/mycard.svg');

let carditems = [
    {
        id:0,
        cardnumber:'1234 5678 1234 5678',
        valid: '00/00',
        holdername:'CARDHOLDER NAME'
    },
    {
        id:1,
        cardnumber:'1234 5678 1234 5678',
        valid: '00/00',
        holdername:'CARDHOLDER NAME'
    },
    {
        id:2,
        cardnumber:'1234 5678 1234 3453',
        valid: '00/00',
        holdername:'CARDHOLDER NAME'
    },
    {
        id:3,
        cardnumber:'1234 5678 1234 6789',
        valid: '00/00',
        holdername:'CARDHOLDER NAME'
    }
]
class Credit extends React.Component {
    constructor() {
        super();
        this.state = {
            view:'',
            button:'',
            id:0
        };
        this.goNext = this.goNext.bind(this);
        this.remove = this.remove.bind(this);
    }
    handleChangeView(view){
        var view = view ? view : '';
        this.setState({view: view});
      }

    handleSave(e) {
        e.preventDefault()
        this.props.close_form();
    }

    renderHeaderSwitch(param) {
        switch(param) {
          case 'change':
            return <SideMenuHeader title="CHANGE MY CURRENT CARD" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>;
            break;
            case 'next':
            case 'card':
            return <SideMenuHeader title="MY CARDS" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>;
            break;
          default:
            return <SideMenuHeader title="ADD A NEW CARD" titleClassName="detailsTitle color-blue" close_form={this.props.close_form}/>;
            break;
        }
    }
    renderBottomButtonSwitch(param) {
        switch(param) {
            case 'next':
                return <Button                            
                        size="small"
                        className="btn btn-small bg-orange btn-rounded color-white"
                        variant="contained"
                        onClick={() => {this.handleChangeView('next')}}>
                            Next
                    </Button>;
                    break;
            case 'done':
                return <Button                            
                        size="small"
                        className="btn btn-small bg-green btn-rounded color-white"
                        variant="contained"
                        onClick={()=>{this.handleSave()}}
                        >
                            Done
                    </Button>;
                    break;
            default:
                return <Button                            
                        size="small"
                        className="btn btn-small bg-green btn-rounded color-white"
                        variant="contained"
                        onClick={() => {this.handleSave()}}>
                            Save
                    </Button>;
                    break;
        }
    }
    goNext(id) {
        console.log(id);
        this.setState({button:'next',id:id});
    }
    remove(id) {
        console.log('sdfsdf')
        this.setState({button:'done'});
        this.setState({view:'card'});
    }
    render() {
        return (
        <>        
        <div className="sidebar-wrap">
        {this.renderHeaderSwitch(this.state.view)}
        
            <div className="chatdetails-main sidebar-content menu-contents dashboard-form">
            {(this.state.view === 'next') ?<CreditDetail item={carditems[this.state.id]} remove={this.remove}/>:
                <form>
                    <List>
                    <div className="chat-settings settings-item">
                        <FormControl fullWidth={true}>
                        <ListItem>
                            <ListItemText primary={<Typography variant="h3" color="primary" > YOUR DEFAULT CARD</Typography>}
                                secondary={<Typography variant="body2" color="textPrimary">Mastercard***333</Typography>}
                            /> 
                        </ListItem>
                        {(this.state.view === 'card') ?
                        <div className="chat-settings settings-item ">
                            <Grid container spacing={3}>
                            {carditems.map(item=>{
                                return <Grid key={item.id} item xs={6}><CreditCard click={true}   item={item} goNext={this.goNext}/></Grid>
                                })
                            }
                            </Grid>
                        </div>:(<>
                        {this.state.view !== 'change' ?(<>
                        <div className="setting-hover">
                        <Link underline="none" onClick={() => {this.handleChangeView('change')}} >
                        <ListItem>
                            <ListItemText primary={<Typography variant="h3" color="primary" > CHANGE MY CURRENT CARD</Typography>} /> 
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                       
                                         
                                    >
                                        <KeyboardArrowRightIcon  color="primary"/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            </Link>
                            </div>
                            </>):('')}
                            <div className="setting-hover">
                        <Link underline="none" >
                        <ListItem>
                            <ListItemText primary={<Typography variant="h3" color="primary" > ADD A NEW CARD</Typography>} /> 
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                        color="inherit"
                                        // onClick={() => {this.handleChangeView('background')}}
                                    >
                                        <KeyboardArrowRightIcon  color="primary"/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                        </ListItem>
                        </Link>
                        </div>
                        {this.state.view === 'change' ?(<>
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
                        </>):('')}
                        <div className="setting-hover">
                        <Link underline="none"  onClick={() => {this.handleChangeView('card')}}>
                        <ListItem>
                            <ListItemAvatar>
                            <img src={mycardIcon} alt="icon" />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="h3" color="primary" > MY CARDS</Typography>} /> 
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="start"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                        color="inherit"
                                       
                                    >
                                        <KeyboardArrowRightIcon  color="primary"/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            </Link>
                            </div>
                            </>)}
                        </FormControl>
                    </div>
                    
                    </List>
                    <div className="form-bottom">
                    {this.renderBottomButtonSwitch(this.state.button)}
                    <div className="row text-center"><a onClick={(e) => {this.props.setSideMenuPage('privacy')}} style={{"fontSize":"10px","cursor":"pointer"}}>View our privacy policy for information on how we handle your sensitive information</a></div>
                    </div>
                </form>
            }
            </div>
        
        </div>
        
        </>
        );
    }
}

export default withRouter(Credit)
