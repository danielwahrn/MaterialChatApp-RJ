import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import ChatHeader from '../../chat/ChatHeader';
import GroupMessages from './GroupMessages';
import GroupChatDetails from '../chat-details/GroupChatDetails';

class GroupChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            messages: [
                {
                    text: "Great night last night",
                    member: {
                        color: "red",
                        username: "redmoon",
                        avatar: require('../../../../assets/images/champy.png'),
                        id: 1,
                        date: "13/11/20174:11pm"
                    }
                },
                {
                    text: "Yeah, it was really cool. Great to see you.",
                    member: {
                        color: "blue",
                        avatar: require('../../../../assets/images/user-img.png'),
                        username: "Susie",
                        id: 3,
                        date: "13/11/20174:11pm"
                    }
                },
                {
                    text: "Susie has made a payment. what a champ!",
                    member: {
                        color: "blue",
                        avatar: require('../../../../assets/images/champy.png'),
                        username: "Champy",
                        id: 2,
                        date: "13/11/20174:12pm"
                    }
                },
                {
                    text: "Thanks Susie! You are awesome",
                    member: {
                        color: "red",
                        username: "Champy",
                        avatar: require('../../../../assets/images/champy.png'),
                        id: 1,
                        date: "13/11/20174:11pm"
                    }
                }
    
            ],
            member: {
                username: this.randomName(),
                color: this.randomColor(),
                id: 1
            }
        }
        this.toggleChatDetails = this.toggleChatDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
    }

    toggleChatDetails(){
        this.setState(prevState => ({
            showDetails: !prevState.showDetails,
        }));
    }
    closeDetails(){
        this.setState({showDetails: false});
    }
      
    randomName() {
        const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
        const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return adjective + noun;
    }

    randomColor() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }
    render() {
        return (
            <>
            <Grid container className={this.state.showDetails?'DetailsOpen':''}>
                <Grid item md={this.state.showDetails ? 7 :12} >
                <ChatHeader
                    image={require("../../../../assets/images/groupIcon.png")}
                    title={"Super Friends"}
                    menuAction={this.toggleChatDetails}
                    appbarClass="bg-red color-white"
                />
                <GroupMessages
                    messages={this.state.messages}
                    currentMember={this.state.member}
                />
                </Grid>
                {this.state.showDetails && 
                <Grid item md={5} >
                    <GroupChatDetails 
                        title="Group Details"
                        closeAction={this.closeDetails}/>
                </Grid>}
            </Grid>
            </>
        );
    }
}

export default GroupChat;