import React, { Component } from "react";
import WelcomeContent from './WelcomeContent';
import ChatHeader from './ChatHeader';


class WelcomePage extends Component {
    state = {
        messages: [
            {
                text: "You owe $0 to your mates. Log into youchamp and head to expenses tab for more details.",
                member: {
                    color: "blue",
                    username: "Champy",
                    avatar: require('../../../assets/images/champy.png'),
                    id: 2
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
                <ChatHeader
                    image={require("../../../assets/images/champy.png")}
                    title={"Champy"}
                />
                <div className="chat-content">
                    <WelcomeContent
                        messages={this.state.messages}
                        currentMember={this.state.member}
                    /></div>
            </>
        );
    }
}

export default WelcomePage;