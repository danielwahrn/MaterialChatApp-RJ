import React, { Component } from "react";
import {Button,Avatar,Grid,FormControl,FormLabel,TextField} from '@material-ui/core';
import SwitchCustom from './form/SwitchCustom';
import ColorPicker from "./ColorPicker/ColorPicker";

class PersonDetails extends Component {
    constructor() {
        super();
        this.state = {
            userImage: require('../../../assets/images/user-img.png'),
            name: 'Susie Peak', 
            phone: '+61 0407 138 267',
            email: 'susie@gmail.com',
            nickname: 'Apple Juice',
        };
    }
   
    render() {
        return (
            <>
            <Grid container >
                <Grid item md={12} className="avatar-image-wrap">
                    <FormControl fullWidth={true}>
                        <input accept="image/*" style={{ display: 'none' }} id="icon-profile-file" type="file" onChange={(event) => this.mediaChange(event)} />
                        <label className="icon-file-add text-center" htmlFor="icon-profile-file">
                        {this.state.userImage !== '' ?
                            <Avatar
                                className="avatar-img"
                                alt="Remy Sharp"
                                src={this.state.userImage} />
                            : ''
                        }
                        </label>
                    </FormControl>
                </Grid>
                <Grid item md={12} className="spacing-lr">
                    <FormLabel >Profile</FormLabel>
                    <SwitchCustom label={"Mute "+this.state.name} onChange={this.handleChange} name="mute" />    
                </Grid>
                
                <Grid item md={12} className="spacing-lr"> 
                    <FormControl fullWidth={true}>
                        <TextField
                            id="person_name"
                            label="Name"
                            placeholder="Super Friends"
                            value={this.state.name}
                            fullWidth
                            disabled
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>
                    
                    <FormControl fullWidth={true}>
                        <TextField
                            id="phone"
                            label="Phone"
                            placeholder="Phone"
                            fullWidth
                            disabled
                            value={this.state.phone}
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>

                    <FormControl fullWidth={true}>
                        <TextField
                            id="email"
                            label="Email"
                            placeholder="Email"
                            fullWidth
                            disabled
                            value={this.state.email}
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>
                </Grid>

                <Grid item md={12}>
                    <div className="spacing-lr">
                        <FormLabel>Select colour</FormLabel>
                        <ColorPicker />
                    </div>
                </Grid>
                
                <Grid item md={12}>
                <div className="spacing-lr">
                    <FormControl  fullWidth={true}>
                        <TextField
                            id="nickname"
                            label="Nickname"
                            placeholder="Nickname"
                            fullWidth
                            disabled
                            value={this.state.nickname}
                            margin="normal"
                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>
                    </div>
                </Grid>
            </Grid>     
            <div className="text-center spacing-lr">
                <Button className="btn btn-small btn-rounded bg-green color-white">Save</Button>
            </div>
           
            </>
        );
    }
}

export default PersonDetails;