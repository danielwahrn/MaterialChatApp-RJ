import React, { Component } from "react";
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

class WelcomeContent extends Component {
    render() {
        return (
            <>
                <div className="Messages-wrap">
                    <div className="Messages-list">
                        <div className="welcome-content text-center">
                            <Avatar
                                alt="Remy Sharp"
                                src={require("../../../assets/images/champy-large.png")}
                                className="funraise-avatar-image" />
                            <div className="welcome-head">
                                <span>Welcome</span>
                                <span className="color-red"> youchamp</span>
                                <span> Web App!</span>
                            </div>
                            <div className="Message-content">
                                <div className="text">It's look like this is your first time here. Let's create a new Chat to share and create memories with your friends!
                                </div>
                            </div>
                            <div className="create-chat">
                                <Link to={'/'}>Create a New Chat</Link>
                            </div>
                            <div className="d-flex">
                                <Avatar
                                    alt="Remy Sharp"
                                    src={require("../../../assets/images/contact-us.png")}
                                    className="funraise-avatar-image" />
                                <div className="welcomepagelink">
                                    <Link to={'/'}>youchamp</Link>
                                    <span> is available on the App Store and Google Play.</span>
                                    <Link to={'/'}>Dowload it now.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WelcomeContent;