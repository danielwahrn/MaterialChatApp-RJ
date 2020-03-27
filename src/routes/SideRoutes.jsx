/* import React from "react";
import { Route, Switch } from "react-router-dom";

import DashboardMenu from '../view/components/menu/SideMenu/DashboardMenu';
import UserProfile from '../view/components/menu/SideMenu/UserProfile';
import Credit from '../view/components/menu/SideMenu/Credit';
import Bank from '../view/components/menu/SideMenu/Bank';
import Password from '../view/components/menu/SideMenu/Password';
import Pin from '../view/components/menu/SideMenu/Pin';
import YouChamp from "../view/components/menu/SideMenu/YouChamp";
import BusineesAccount from "../view/components/menu/SideMenu/BusinessAccount";
import Tips from "../view/components/menu/SideMenu/Tips";

export default function SideRoutes() {
    return (
        <Switch>
            <Route exact path="/dashboard" component={DashboardMenu} />
            <Route exact path="/dashboard/chat/**" component={DashboardMenu} />
            <Route exact path="/dashboard/groupchat/**" component={DashboardMenu} />
            <Route path="/dashboard/userprofile" component={UserProfile} /> 
            <Route path="/dashboard/credit" component={Credit} />
            <Route path="/dashboard/bank" component={Bank} />
            <Route path="/dashboard/password" component={Password} />
            <Route path="/dashboard/pin" component={Pin} />
            <Route path="/dashboard/youchamp" component={YouChamp} />
            <Route path="/dashboard/business" component={BusineesAccount} />
            <Route path="/dashboard/tips" component={Tips} />
        </Switch>
    );
} */

import React from 'react';
import HexagonBtn from '../view/components/HexagonBtn';
import ChatArchive from '../view/components/chat/ChatArchive';
import CreateFunRaise from '../view/components/menu/funraise/CreateFunRaise';
import FunRaiseSummary from '../view/components/menu/funraise/FunRaiseSummary';
import CreatePrivatechat from '../view/components/menu/privatechat/CreatePrivatechat';

import Paper from '@material-ui/core/Paper';
import GroupMember from '../view/components/menu/group-chat/GroupMember';
import CreateGroupChat from '../view/components/menu/group-chat/CreateGroupChat';

import UserProfile from '../view/components/menu/SideMenu/UserProfile';
import Credit from '../view/components/menu/SideMenu/Credit';
import Bank from '../view/components/menu/SideMenu/Bank';
import Password from '../view/components/menu/SideMenu/Password';
import Pin from '../view/components/menu/SideMenu/Pin';
import YouChamp from "../view/components/menu/SideMenu/YouChamp";
import BusineesAccount from "../view/components/menu/SideMenu/BusinessAccount";
import Tips from "../view/components/menu/SideMenu/Tips";

import Privacy from "../view/components/menu/SideMenu/Privacy";
import DashboardMenu from "../view/components/menu/SideMenu/DashboardMenu";

const chatIcon = require('../assets/images/menu/group-chat.svg');

class SideRoutes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menupage:''
        };
    }
    backToMenu = () => {
        this.setState({           
            menupage:''
        })
    }
    setSideMenuPage = (page) =>{
        this.setState({menupage:page});
    }
    renderSideMenu = () => {
        const commonProps = { close_form: this.backToMenu.bind(this) };
        switch(this.state.menupage) {
            case 'userprofile':
                return <UserProfile {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'bank':
                return <Bank {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'credit':
                return <Credit {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'password':
                return <Password {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'pin':
                return  <Pin {...commonProps} setSideMenuPage={this.setSideMenuPage}/>
            case 'youchamp':
                return <YouChamp {...commonProps} setSideMenuPage={this.setSideMenuPage}/>
            case 'business':
                return <BusineesAccount {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'tips':
                return <Tips {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'privacy':
                return <Privacy {...commonProps} setSideMenuPage={this.setSideMenuPage}/>;
            case 'dashboard':
                return <DashboardMenu setSideMenuPage={this.setSideMenuPage}/>;
            case '':
                return <DashboardMenu setSideMenuPage={this.setSideMenuPage}/>;
        }
    }

    render() {
        return (
            <>
            
                <Paper id="dashboard-wrap" className="main-menu" square>
                    
                    {this.renderSideMenu()}
                </Paper>
            </>
        );
    }
}
export default SideRoutes;