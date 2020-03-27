import React from 'react';
import { Grid } from '@material-ui/core';
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from '../Layout';

import DashboardRoutes from '../../routes/DashboardRoutes';
import SideRoutes from '../../routes/SideRoutes';
import { createBrowserHistory } from 'history';


var history = createBrowserHistory();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showChat: false, showGroupChat: false };
  }

  showChat = () => {
    this.setState((state) => ({
      showChat: !state.showChat,
    }))
  }
  showGroupChat = () => {
    this.setState((state) => ({
      showGroupChat: !state.showGroupChat
    }))
  }

  render() {
    return (
      <Layout className="dashboard-page">
        <Router history={history}>
          <Grid
            container
            direction="row"
          >
            <Grid item md={4} className="dashboard-menu">
              <SideRoutes />
            </Grid>
            <Grid item md={8} className="chat-wrap">
              <DashboardRoutes />
            </Grid>
          </Grid>
        </Router>
      </Layout>
    );
  }
}
export default Dashboard;