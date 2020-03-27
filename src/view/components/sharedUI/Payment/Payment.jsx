import React from 'react';
import { Avatar, AppBar, Toolbar, Typography, IconButton, Paper, Button, TextField, FormLabel, Table, TableHead, TableCell, TableRow, TableBody, Grid,ListItem, ListItemAvatar,
        List,ListItemIcon,ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import {DashboardModel} from '../../DashboardModel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import HexagonBtn from '../../HexagonBtn';
//"../../../../assets/images/champy.png"
function createData(name, owe, owed) {
  return { name, owe, owed };
}

const rows = [
  createData('(XXX)', '110,000.00', '230,500.00'),
  createData('(XXX)', '33,000.00', '70,500.85'),
  createData('(XXX)', '110.05', '30,200.00'),
  
];
let oweners = [
  {
      id: 1,
      name: "Maria Webster",
      currency:'AUD',
      amount:'123123',
      img:"../../../../assets/images/champy.png"
  },
  {
      id: 2,
      name: "Maria Webster",
      currency:'AUD',
      amount:'123123',
      img:"../../../../assets/images/champy.png"
  },
  {
      id: 3,
      name: "Maria Webster",
      currency:'AUD',
      amount:'123123',
      img:"../../../../assets/images/champy.png"
  },
  {
      id: 4,
      name: "Maria Webster",
      currency:'AUD',
      amount:'123123',
      img:"../../../../assets/images/champy.png"
  },
  {
      id: 5,
      name: "Maria Webster",
      currency:'AUD',
      amount:'123123',
      img:"../../../../assets/images/champy.png"
  },
];
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        show:false
    };
  }

  componentDidMount() {
       
      DashboardModel.openModel('paymentmodal');
  }

  render() {
    return (
      <>
        <div className="sidebar-wrap side-container">
          <AppBar className="header-top sidebar-header bg-orange color-white " position="static">
            <Toolbar>
              <IconButton
                edge="start"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={this.props.close_form}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <Typography variant="body2" className="detailsTitle">BILLS</Typography>
            </Toolbar>
          </AppBar>
            
          <Paper square className="menu-contents-wrap sidebar-content">
            
            <Paper square className="menu-contents dashboard-form">
            {this.state.show?(<Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right" style={{"color":"#A6192E"}}>You Owe</TableCell>
                  <TableCell align="right" style={{"color":"#0047BB"}}>You are Owed</TableCell>                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right" style={{"color":"#A6192E"}} >{row.owe}</TableCell>
                    <TableCell align="right" style={{"color":"#0047BB"}}>{row.owed}</TableCell>                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            ):('')}
            {<div className="hexagonbutton-group text-center">
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <HexagonBtn href="#" bg="red" color="white" text="Pending" size="medium"/>
              </Grid>
              <Grid item xs={3}>
                <HexagonBtn href="#" bg="green" color="white" text="Pay" size="medium"/>
              </Grid>
              <Grid item xs={3}>
                <HexagonBtn href="#" bg="orange" color="white" text="Remind" size="medium"/>
              </Grid>
              <Grid item xs={3}>
                <HexagonBtn href="#" bg="blue" color="white" text="History" size="medium"/>
              </Grid>
            </Grid>
            </div>}
            
              <section className="section">
                <Toolbar className="search-toolbar" onChange={this.handleChange}>
                  <Paper className="search-form" component="form">
                    <IconButton type="submit" aria-label="search" size="small">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      id="s"
                      name="s"
                      placeholder="Search Bills"
                    />
                  </Paper>
                </Toolbar>
                {this.state.show?(
                <OwnerList items={this.state.list} delete={this.removeItem} />
                ):(<Typography variant="caption" color="textSecondary" className="text-center" gutterBottom > You don't have any bills</Typography>)}
                </section>
               
            </Paper>
          </Paper>
          <DashboardModel id="paymentmodal" outsideClickClose={false} removeUnmount={false}>
              <div className="model-content">
                  <h1>Hey there champ!</h1>
                  <p>It's look like you haven't been a part of  any Bills yet! Create a new Bill to get started! For now, I'll take you back to your Groups page.</p>
                  <div className="button-right">
                      <Button variant="contained" className="btn bg-orange btn-rounded"
                          onClick={(e) => { DashboardModel.close('paymentmodal')(e); this.setState({show:true})}}>Got It!</Button>
                  </div>
              </div>
          </DashboardModel>
        </div>
      </>
    );
  }
}
class OwnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({filtered:oweners})
  }

  componentWillReceiveProps(nextProps) {
    
  }

  handleChange(e) {
    
  }

  render() {
    return (

      <div className="owner-list">
        
          <List>
          {this.state.filtered.map(item => (
            <ListItem key={item.id} >
              <ListItemText 
                primary={<Typography variant="subtitle2" color="textPrimary" gutterBottom > {item.name}</Typography>}
                secondary={<React.Fragment><Avatar src={require("../../../../assets/images/user.png")} />
                          <Typography variant="subtitle2" color="textSecondary" gutterBottom > {item.currency}</Typography>
                          <Typography variant="subtitle2" color="textSecondary" gutterBottom > {item.amount}</Typography> </React.Fragment>
                        } 
                />  
              <ListItemSecondaryAction>Owes You</ListItemSecondaryAction>
          </ListItem>          
          ))}
          </List>
      </div>
      
    )
  }
}

export default Payment;