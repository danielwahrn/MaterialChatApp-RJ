import React from 'react';
import { Toolbar, IconButton, Paper, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import GroupMemberList from './GroupMemberList';
import SidebarHeader from '../SidebarHeader';

class GroupMember extends React.Component {
    state = {
        messages: [

            {
                text: "Chat with Champy to find out more about champy",
                member: {
                    color: "#fb9e1a",
                    username: "CHAMPY!",
                    avatar: require('../../../../assets/images/champy-border-green.png'),
                }
            },
            {
                text: "Have we decided what we are going...",
                member: {
                    color: "#0047bb",
                    avatar: require('../../../../assets/images/champy-border-green.png'),
                    username: "Susie"
                }
            }
        ],
        member: {
            username: this.randomName(),
            color: this.randomColor(),
            id: 1
        }
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
                <div className="sidebar-wrap">
                    <SidebarHeader
                        className=""
                        title="CHATS"
                        backAction={this.props.close_form} >

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
                        <Toolbar className="archive-toolbar">
                            <p className="archive-title">Chats Archive</p>
                            <Link href="#" className="ml-auto archive-count">
                                <span>5</span>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </Toolbar>
                    </SidebarHeader>

                    <div className="group-member">
                        <div className="group-mem-list">
                            <GroupMemberList
                                messages={this.state.messages}
                                currentMember={this.state.member}
                                onClick={this.props.showGroupChat}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default GroupMember;