import React from 'react';
import {
    Typography, IconButton, Paper, Grid, Avatar, List,
    ListItem, ListItemAvatar, ListItemText,
} from '@material-ui/core';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaShareAlt, FaPlus } from 'react-icons/fa';
import SidebarHeader from '../SidebarHeader';
const userImage = require("../../../../assets/images/user.png");
let contributors = [{
    title: "Maria",
    image: userImage,
    contribution: "AUD 130.00"
},
{
    title: "Eduardo",
    image: userImage,
    contribution: "AUD 50.00"
},
{
    title: "Simon",
    image: userImage,
    contribution: "AUD 230.00"
},
{
    title: "Albert",
    image: userImage,
    contribution: "AUS 90.00"
}];
class FunRaiseSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <div className="sidebar-wrap">
                    <SidebarHeader
                        className="bg-orange color-white"
                        title="FUNRAISE details"
                        backAction={this.props.close_form} />

                    <Paper square className="menu-contents-wrap sidebar-content">
                        <Paper square className="menu-contents summary-detail">
                            <div className="field-group">
                                <Grid container justify="center" alignItems="center" className="avatar-image-wrap">
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={userImage}
                                        className="funraise-avatar-image" />
                                    <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" />
                                    <label className="icon-file-add" htmlFor="icon-button-file">
                                        <IconButton
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <FaPlus size="20px" />
                                        </IconButton>
                                    </label>
                                </Grid>
                            </div>
                            <div className="field-group">
                                <label>FUNRAISE NAME</label>
                                <Typography >Mental Health Fundraiser</Typography>
                            </div>
                            <div className="field-group">
                                <label>FUNRAISE DESCRIPTION</label>
                                <Typography >Running 50 kms in January for mental health awareness and treatment.</Typography>
                            </div>
                            <div className="field-group">
                                <label>ACHIEVED AMOUNT</label>
                                <Typography >AUD 500.00</Typography>
                            </div>
                            <div className="field-group">
                                <label>SHARE</label>
                                <div className="social-icons">
                                    <IconButton aria-label="Faceboock" size="small">
                                        <FaFacebookF fontSize="inherit" size="20px" />
                                    </IconButton>
                                    <IconButton aria-label="Twitter" size="small">
                                        <FaTwitter fontSize="inherit" size="20px" />
                                    </IconButton>
                                    <IconButton aria-label="Linked In" size="small">
                                        <FaLinkedinIn fontSize="inherit" size="20px" />
                                    </IconButton>
                                    <IconButton aria-label="Pinterest" size="small">
                                        <FaPinterest fontSize="inherit" size="20px" />
                                    </IconButton>
                                    <IconButton aria-label="share" size="small">
                                        <FaShareAlt fontSize="inherit" size="20px" />
                                    </IconButton>

                                </div>
                            </div>
                            <div className="field-group">
                                <label>CONTRIBUTORS</label>
                                <List className="contributor-list" >
                                    {contributors.map((item, index) => {
                                        return <ListItem disableGutters={true} key={index}>
                                            <ListItemAvatar>
                                                <Avatar alt={item.title} src={item.image} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.title}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography component="span" variant="body2" className="inline" color="textPrimary"
                                                        >{item.contribution}</Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                    })}
                                </List>
                            </div>
                        </Paper>
                    </Paper>
                </div>
            </>
        );
    }
}
export default FunRaiseSummary;