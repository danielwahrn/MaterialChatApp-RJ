import React from "react";
import { IconButton,Button, Avatar, Grid,FormControl, FormLabel,TextField, Typography} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { GoDeviceCamera } from 'react-icons/go';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import SwitchCustom from '../../sharedUI/form/SwitchCustom';
import TabContent from "../../sharedUI/TabContent";
import ChatDetailsHeader from "./ChatDetailsHeader";
import BillsHistory from '../../sharedUI/Bill/BillsHistory';
import BillsDetail from '../../sharedUI/Bill/BillDetail';
import GroupMembers from '../../sharedUI/GroupMembers';
import PersonDetails from '../../sharedUI/PersonDetails';
import GroupMemberDetail from "./GroupMemberDetail";
import BackgroundTabs from "./BackgroundTabs";
import MediaLinksDocsTab from './MediaLinksDocsTab';

class GroupChatDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newMember:'',
            groupImage: require("../../../../assets/images/groupIcon.png"),
            groupname: 'Super Friends', 
            phone: '+61 0407 138 267',
            email: 'susie@gmail.com',
            nickname: 'Apple Juice',
            checked: false,
            editName:false,
            view:'detail',
            billId: '',
            viewBillDetails: false,
            personId: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNewMember = this.handleChangeNewMember.bind(this);
        this.handleChangeView = this.handleChangeView.bind(this);
        this.showBillDetails = this.showBillDetails.bind(this);
        this.hideBillDetails = this.hideBillDetails.bind(this);
        this.showPersonalDetails = this.showPersonalDetails.bind(this);
        
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

    changeName(){
        console.log('change group name');
        this.setState((state) => ({editName:!state.editName}))
    }
    
    handleChange = name => event => {
        var value = event.target.value;
        this.setState((state) => ({
                [name]: value
        }));
    };
    handleChangeNewMember = name => event => {
        this.setState({[name]:event.target.value});
    }
    mediaChange(event){
        this.setState({
            groupImage: URL.createObjectURL(event.target.files[0])
          })
    }
    //bill action
    showBillDetails(id){
        console.log(id,'bill details ');
        this.setState({viewBillDetails: true,billId: id});
    }
    hideBillDetails(){
        this.setState({viewBillDetails: false,billId: ''});
    }
    // member action
    showPersonalDetails(id){
        console.log('member click');
        this.setState({personId: id,view: 'personDetails'});
    }
    addMember(){
        if(this.state.newMember !== ''){
            console.log('add new member',this.state.newMember);
        }
    }

    render() {
        const billHistory = [{
            id: 1,
            avatar: require('../../../../assets/images/groupIcon.png'),
            title: 'James Birthday',
            date:'17/10/2018',
            recurs: 'on the 17th of every month',
            arranged_by: 'Maria Webster',
            amount: 'XXX 300,000,000 / 300,000,000',
        },
        {
            id: 2,
            avatar: require('../../../../assets/images/groupIcon.png'),
            title: 'Monday Coffee',
            date:'23/10/2018',
            recurs: 'every Monday',
            arranged_by: 'John Citizen',
            amount_usd: '$16 / $24',
        },
        {
            id: 3,
            avatar: require('../../../../assets/images/groupIcon.png'),
            title: 'Broken window',
            date:'14/08/2017',
            recurs: 'on the 5th of every month',
            arranged_by: 'Albert Nash',
            amount_usd: '$17 / $58',
        }];
        let members = [{
            id: 1,
            name: "Lynda Tanaka",
            image: require('../../../../assets/images/user-img.png'),
            designation: 'Group Owner'
        },
        {
            id: 2,
            name: "Terry Bartoli",
            image: require('../../../../assets/images/user-img.png'),
            designation: 'Group Admin'
        },
        {
            id: 3,
            name: "Susie Peak",
            image: require('../../../../assets/images/user-img.png'),
            designation: ''
        }];
        return (
        <>
            {this.state.view === 'background'?(
                <BackgroundTabs closeAction={() => {this.handleChangeView('detail')}} />
            ):(
                this.state.view === 'media' ?(
                    <MediaLinksDocsTab closeAction={() => {this.handleChangeView('detail')}} />
                ):(
                this.state.view === 'personDetails' ?(
                    <GroupMemberDetail title="Person Details" closeAction={() => {this.handleChangeView('detail')}} />
                ):('')))}
            {this.state.view === 'detail' ?(<>
                <div className="sidebar-wrap">
                    <ChatDetailsHeader classNames="bg-red color-white" title={this.props.title} closeAction={this.props.closeAction} />
                    <div className="chatdetails-main groupchatDetails-main sidebar-content">
                   
                     <Grid container >
                        <Grid item md={12} className="avatar-image-wrap">
                            <FormControl fullWidth={true}>
                                <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={(event) => this.mediaChange(event)} />
                                <label className="icon-file-add text-center" htmlFor="icon-button-file">
                                {this.state.groupImage !== '' ?
                                    <Avatar
                                        className="avatar-img"
                                        alt="Remy Sharp"
                                        src={this.state.groupImage} />
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
                        <Grid item md={12} className="spacing-lr">
                            <SwitchCustom label="Mute Group" onChange={this.handleChange} name="mute" />    
                        </Grid>
                        
                        <Grid item md={12} className="spacing-lr"> 
                            <div class="control-with-button change_name">
                                <FormControl fullWidth={true}>
                                    <TextField
                                        onChange={this.handleChange('groupname').bind(this)}
                                        id="groupname"
                                        label="What's your group name?"
                                        placeholder="Super Friends"
                                        value={this.state.groupname}
                                        disabled={this.state.editName?false:true}
                                        fullWidth
                                        margin="normal"
                                        InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <IconButton size="small" aria-label="change_name"
                                onClick={this.changeName.bind(this)}><EditIcon /></IconButton>
                            </div>
                           
                            {/* <FormControl fullWidth={true}>
                                <TextField
                                    onChange={this.handleChange('whom').bind(this)}
                                    id="whom"
                                    label="Invite your friends"
                                    placeholder="Whom?"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </FormControl> */}
                        </Grid>
                        <Grid item md={12}>
                            <Button className="spacing-lr" fullWidth onClick={() => this.handleChangeView('background')}>
                                Group background 
                                <KeyboardArrowRightIcon style={{marginLeft:'auto'}} />
                            </Button>
                        </Grid>
                        <Grid item md={12}>
                            <Button className="spacing-lr media-link-button" fullWidth 
                                onClick={() => this.handleChangeView('media')}>
                                <div className="media-link" variant="body1">Media, Links & Docs
                                <p className="media-count">168</p></div>
                                <KeyboardArrowRightIcon style={{marginLeft:'auto'}} />
                            </Button>
                        </Grid>
                        {this.state.viewBillDetails === true?(
                            <Grid item md={12}>
                                <BillsDetail members={members} bill={this.state.billId} hideBillDetails={this.hideBillDetails}/>
                            </Grid>
                        ):
                        <>
                            <Grid item md={12}>
                                <FormLabel className="spacing-lr">BILLS History</FormLabel>
                                <BillsHistory billHistory={billHistory} showBillDetails={this.showBillDetails}/>
                            </Grid>
                            <Grid item md={12}>
                                {/* <FormLabel className="spacing-lr">Members</FormLabel> */}
                                <div class="add-new-member spacing-lr">
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            onChange={this.handleChangeNewMember('newMember').bind(this)}
                                            id="newmember"
                                            label="Members"
                                            placeholder="Add Member"
                                            fullWidth
                                            margin="normal"
                                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </FormControl>
                                    <IconButton type="submit" size="small" color="success" aria-label="newmember" className="color-white bg-green"
                                    onClick={this.addMember.bind(this)}><AddIcon /></IconButton>
                                </div>
                                <GroupMembers members={members} onMemberClick={this.showPersonalDetails}/>
                            </Grid>
                            <Grid item md={12} className="text-center leave-group-btn">
                                <Button className="btn btn-small btn-rounded bg-red color-white">Leave Group</Button>
                            </Grid>
                        </>
                        }
                    </Grid>
                    
                </div>
            </div>
            </>):('')}
        </>);
    } 
}

export default GroupChatDetails
