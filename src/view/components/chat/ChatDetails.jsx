import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CloseIcon from '@material-ui/icons/Close';
import Switch from "react-switch";
import InputBase from '@material-ui/core/InputBase';
import { CirclePicker } from 'react-color';
import MediaLinksDocsTab from '../menu/chat-details/MediaLinksDocsTab';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TabContent from "../sharedUI/TabContent";

class ChatDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Susie Peak', 
      phone: '+61 0407 138 267',
      email: 'susie@gmail.com',
      nickname: 'Apple Juice',
      checked: false,
      view:'detail'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
  }
  update(e) {
    this.setState({
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      nickname : this.refs.nickname.value
    });
  }
  handleChangeView(view){
    var view = view ? view : 'detail';
    this.setState({view: view});
    console.log(view);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <>
      {this.state.view === 'background'?(
        <TabContent onClose={() => {this.handleChangeView('detail')}} />
      ):(
        this.state.view === 'media' ?(
          <MediaLinksDocsTab onClose={() => {this.handleChangeView('detail')}} />
        ):('')
      )}
      {this.state.view === 'detail' ?(<>
      <div className="sidebar-wrap">
        <AppBar className="header-top bg-red color-white" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={this.props.closeAction}
              >
              <CloseIcon />
            </IconButton>
              <Typography variant="body2">Chat Details</Typography>
          </Toolbar>
        </AppBar>
        <div className="chatdetails-main sidebar-content">
          
          <div>
            <Avatar
              className="avatar-img"
              alt="Remy Sharp"
              src={require("../../../assets/images/chat-details-profile.png")} />
          </div>
          <div className="flex-d">
            <p>Mute Lynda Singh</p>
            <label htmlFor="small-radius-switch">
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                handleDiameter={20}
                offColor="#888b8d"
                onColor="#44d62c"
                offHandleColor="#f7f7f7"
                onHandleColor="#f7f7f7"
                height={26}
                width={50}
                className="react-switch"
                id="small-radius-switch"
              />
            </label>
          </div>
          <div className="edit-data">
            <label>Name</label>
            <input
              ref="name"
              onChange={this.update.bind(this)} 
              value={this.state.name}
            />
          </div>
          <div className="edit-data">
            <label>Phone</label>
            <input
              ref="phone"
              onChange={this.update.bind(this)} 
              value={this.state.phone}
            />
          </div>
          <div className="edit-data"> 
            <label>Email</label>
            <input
              ref="email"
              onChange={this.update.bind(this)} 
              value={this.state.email}
            />
          </div>
          <div className="custom-colorpicker">
            <h3>Select Colour</h3>
            <CirclePicker />
          </div>
          <div className="edit-data">
            <label>Nickname</label>
            <input
              ref="nickname"
              onChange={this.update.bind(this)} 
              value={this.state.nickname}
            />
          </div>
          <div className="chat-settings">
            <div><h3>Chat Background</h3></div>  
            <div>
              <IconButton
              edge="start"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {this.handleChangeView('background')}}
              >
              <KeyboardArrowRightIcon />
            </IconButton>
            </div>
          </div>
          <div className="chat-settings">
            <div><h3>Media, Links & Docs</h3></div>  
            <div>
              <IconButton
              edge="start"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {this.handleChangeView('media')}}
              >
              <KeyboardArrowRightIcon />
            </IconButton>
            </div>
          </div>
          <div className="chat-settings">
            <div><h3>BILLS History</h3></div>  
            <div>
              {/* <BillsHistory /> */}
            </div>
          </div>
        
        </div>
      </div>
      </>):('')}
      </>
    );
  } 
}

export default ChatDetails
