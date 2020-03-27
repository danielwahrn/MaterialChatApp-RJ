import React, { Component } from "react";
import { Grid    } from '@material-ui/core';
import Messages from './Messages';
import ChatHeader from './ChatHeader';
import ChatDetails from './ChatDetails';
class Chat extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    text: "You owe $0 to your mates. Log into youchamp and head to expenses tab for more details.",
                    member: {
                        color: "blue",
                        username: "Champy",
                        avatar: require('../../../assets/images/champy.png'),
                        id: 2
                    }
                },

                {
                    text: "This is a test message!",
                    member: {
                        color: "red",
                        username: "redmoon",
                        avatar: require('../../../assets/images/champy.png'),
                        id: 1
                    }
                },
                {
                    text: `<p>Please type one of the below commands:<br />
                    <ul>
                    <li>1) How do I make a group</li>
                    <li>2) How do I pay</li>
                    <li>3) Where is my money</li>
                    <li>4) What funds am I owed by youchamp</li>
                    <li>5)Whom do I owe</li>
                    <li>6) Who owes me</li>
                    <li>7) Do my friends need to download the app to join a group</li>
                    <li>8) What happens to the data of the closed group</li>
                    <li>9) Why can't delete a group to share payments</li>
                    <li>10) What happens if one of the group members doesn't pay</li>
                    <li>11) Do you charge any fees for this bill splitting app</li>
                    <li>12) How do you close a group</li>
                    <li>13) What's the difference between equal not unequal splits</li>
                    <li>14) Can I pay for my friends</li>
                    <li>15) Why can't you pay directly to my credit card</li>
                    <li>16) When will my money come to my account</li>
                    <li>17) Is my chat private</li>
                    <li>18) What do you do with my contact details</li>
                    <li>19) How do you store my bank details for direct debits and payments</li>
                    <li>20) How do you store my credit card data</li></ul> </p> `,
                    member: {
                        color: "blue",
                        avatar: require('../../../assets/images/champy.png'),
                        username: "Champy",
                        id: 2
                    }
                }
            ],
            member: {
                username: this.randomName(),
                color: this.randomColor(),
                id: 1
            },
            showDetails:false
        };
        this.toggleChatDetails = this.toggleChatDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
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
    toggleChatDetails(){
        this.setState(prevState => ({
            showDetails: !prevState.showDetails,
        }));
    }
    closeDetails(){
        this.setState({showDetails: false});
    }
    render() {
        return (
            <>
            <Grid container className={this.state.showDetails?'DetailsOpen':''}>
                <Grid item md={this.state.showDetails ? 7 :12} >
                <ChatHeader
                    image={require("../../../assets/images/champy.png")}
                    title={"Champy"}
                    menuAction={this.toggleChatDetails}
                />
                <Messages
                    messages={this.state.messages}
                    currentMember={this.state.member}
                />
                </Grid>
                {this.state.showDetails && 
                <Grid item md={5} >
                    <ChatDetails 
                        title="Group Details"
                        closeAction={this.closeDetails}/>
                </Grid>}
            </Grid>
            </>
        );
    }
}

export default Chat;