import React from 'react';
import { Avatar, AppBar, Toolbar, Typography, IconButton, Paper, Button, TextField, FormLabel } from '@material-ui/core';

import DashboardModel from '../../DashboardModel';
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
class CreatePrivatechat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Terry Bartoli", "Susie Peak", "Alick Buscarido", "Alisha Warr", "Barbara Tankard", "Beau Jones", "Blair Rusby", "Chariotte Zeartz", "Cooper Cho"]
    };
  }
  render() {
    return (
      <>
        <div className="sidebar-wrap side-container">
          <AppBar className="header-top sidebar-header bg-red color-white" position="static">
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
              <Typography variant="body2" >Private</Typography>
            </Toolbar>
          </AppBar>
          <Paper square className="menu-contents-wrap sidebar-content">
            <Paper square className="menu-contents dashboard-form">
              <section className="section">
                <List items={this.state.list} delete={this.removeItem} />
              </section>
            </Paper>
          </Paper>
        </div>
      </>
    );
  }
}
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.items;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div className="search-list">
        <Toolbar className="search-toolbar" onChange={this.handleChange}>
          <Paper className="search-form" component="form">
            <IconButton type="submit" aria-label="search" size="small">
              <SearchIcon />
            </IconButton>
            <InputBase
              id="s"
              name="s"
              placeholder="Search For Friends"
            />
          </Paper>
        </Toolbar>
        <div className="heading-main">
          <h3>Frequently contacted</h3>
        </div>
        <ul>
          {this.state.filtered.map(item => (
            <li key={item}>
              <Avatar alt="Remy Sharp" src={require("../../../../assets/images/champy.png")} />
              <span> {item} </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CreatePrivatechat;