import React from "react";
import { Route, Switch } from "react-router-dom";

import WelcomePage from "../view/components/chat/WelcomePage";
import Chat from "../view/components/chat/Chat";
import GroupChat from "../view/components/menu/group-chat/GroupChat";

export default function DashboardRoutes() {
    return (
        <Switch>
            <Route exact path="/dashboard/" component={WelcomePage} />
            <Route path="/dashboard/chat/:id" component={Chat} />
            <Route path="/dashboard/groupchat/:id" component={GroupChat} />
            <Route path="/dashboard/**" component={WelcomePage} /> 
            
        </Switch>
    );
}