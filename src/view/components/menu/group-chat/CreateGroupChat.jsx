import React from 'react';
import { Paper, Grid, Avatar, IconButton, FormControl, TextField, Button } from '@material-ui/core';
import UsersList from '../../sharedUI/UsersList';
import SidebarHeader from '../SidebarHeader';
import { GoDeviceCamera } from 'react-icons/go';

const image_path = require('../../../../assets/images/user-img.png')
let users = [
    {
        id: 1,
        name: "Lynda Tanaka",
        image: image_path
    },
    {
        id: 2,
        name: "Terry Bartoli",
        image: image_path
    },
    {
        id: 3,
        name: "Susie Peak",
        image: image_path
    },
    {
        id: 4,
        name: "Alick Buscarido",
        image: image_path
    },
    {
        id: 5,
        name: "Alisha Warr",
        image: image_path
    },
    {
        id: 6,
        name: "Barbara Tankard",
        image: image_path
    },
    {
        id: 7,
        name: "Beau Jones",
        image: image_path
    },
    {
        id: 8,
        name: "Blair Rusby",
        image: image_path
    },
    {
        id: 9,
        name: "Chariotte Zeartz",
        image: image_path
    },
    {
        id: 10,
        name: "Cooper Cho",
        image: image_path
    }
];
let users_frequent = [{
    id: 1,
    name: "Lynda Tanaka",
    image: image_path
},
{
    id: 2,
    name: "Terry Bartoli",
    image: image_path
},
{
    id: 3,
    name: "Susie Peak",
    image: image_path
}];
class CreateGroupChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupImage:'',
            formData: {},
            selectedUsers: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.mediaChange = this.mediaChange.bind(this)
    }

    handleChange = name => event => {
        var value = event.target.value;
        this.setState((state) => ({
            formData: {
                ...state.formData,
                [name]: value,
            }
        }));
    };
    mediaChange(event){
        this.setState({
            groupImage: URL.createObjectURL(event.target.files[0])
          })
    }


    onSubmit = () => {
        console.log({ 
            ...this.state.formData, 
            users: this.state.selectedUsers,
            groupImage: this.state.groupImage 
        });
        this.props.close_form();
    }
    setSelectedUsers(users) {
        this.setState({ selectedUsers: users });
        console.log('selected', users);
    }

    render() {
        return (
            <>
                <div className="sidebar-wrap">
                    <SidebarHeader
                        className="bg-red color-white text-center"
                        title={this.state.selectedUsers.length > 0 ? "Create New Group" : "Contacts"}
                        titleClassName="flex1"
                        backAction={this.props.close_form} />

                    <Paper square className="menu-contents-wrap sidebar-content bg-gray">
                        <Paper square className="menu-contents userslist-wrap bg-gray">
                            {!this.state.selectedUsers.length > 0 ? (
                                <UsersList
                                    search={true}
                                    groupAlfa={true}
                                    frequent={users_frequent}
                                    users={users}
                                    onNextBtn={this.setSelectedUsers.bind(this)} />
                            ) : (
                                    <div className="createGroupForm">
                                        <form >

                                            <Grid container justify="center" alignItems="center">
                                                <Grid item md={6} className="avatar-image-wrap">
                                                    <FormControl fullWidth={true}>
                                                        <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={(event) => this.mediaChange(event)} />
                                                        <label className="icon-file-add" htmlFor="icon-button-file">
                                                        {this.state.groupImage !== '' ?
                                                            <img src={this.state.groupImage}/>
                                                            : <IconButton
                                                                aria-label="upload picture"
                                                                component="span"
                                                                >
                                                                <GoDeviceCamera />
                                                            </IconButton>
                                                        }
                                                        </label>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <FormControl fullWidth={true}>
                                                        <TextField
                                                            onChange={this.handleChange('groupname').bind(this)}
                                                            id="groupname"
                                                            label="your group's name"
                                                            placeholder="Super Friends"
                                                            fullWidth
                                                            margin="normal"
                                                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                                            InputLabelProps={{ shrink: true }}
                                                        /></FormControl>
                                                    <FormControl fullWidth={true}>
                                                        <TextField
                                                            onChange={this.handleChange('whom').bind(this)}
                                                            id="whom"
                                                            label="Invite your friends"
                                                            placeholder="Whom?"
                                                            fullWidth
                                                            margin="normal"
                                                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                                            InputLabelProps={{ shrink: true }}
                                                        /></FormControl>
                                                </Grid>
                                            </Grid>
                                        </form>
                                        <UsersList
                                            search={true}
                                            showFrequent={false}
                                            users={this.state.selectedUsers}
                                            onNextBtn={false} />
                                        <div className="text-center">
                                            <Button
                                                className="btn btn-submit btn-small bg-green color-white rounded-radius text-center selected-userlist-next"
                                                onClick={this.onSubmit}
                                            >Done</Button>
                                        </div>
                                    </div>

                                )}

                        </Paper>
                    </Paper>
                </div>

            </>
        );
    }
}
export default CreateGroupChat;