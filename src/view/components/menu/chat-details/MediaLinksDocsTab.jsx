import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import ChatDetailsHeader from './ChatDetailsHeader';
import { AppBar,Tabs,Tab,Box,Typography} from '@material-ui/core';
import Gallery from '../../sharedUI/Gallery/Gallery';
import File from '../../sharedUI/FileUpload/File';
import LinkTab from './MLDTab/LinkTab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box className="tabBox">{children}</Box>}
      </Typography>
    );
  }


class MediaLinksDocsTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {tabValue:0};
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    handleTabChange(event,index){
        this.setState({tabValue: index});
    }
    handleTabChangeIndex(index){
        this.setState({tabValue: index});
    };
    render() {
        return (
            <div className="sidebar-wrap">
                <ChatDetailsHeader classNames="bg-red color-white" 
                    title="Media, links & docs" 
                    icon="back"
                    closeAction={this.props.closeAction} />

                <div className="container up sidebar-content">
                    <AppBar className="details-tab no-shadow " position="static" color="default">
                        <Tabs
                            value={this.state.tabValue}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                        <Tab label="Media" {...this.a11yProps(0)} />
                        <Tab label="links" {...this.a11yProps(1)} />
                        <Tab label="Docs" {...this.a11yProps(2)} />
                        <Tab label="Favorite" {...this.a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        index={this.state.tabValue}
                        onChangeIndex={this.handleTabChangeIndex} >
                        <TabPanel value={this.state.tabValue} index={0} >
                            <Gallery />
                        </TabPanel>
                        <TabPanel value={this.state.tabValue} index={1} >
                            <LinkTab />
                        </TabPanel>
                        <TabPanel value={this.state.tabValue} index={2}>
                            <File />
                        </TabPanel>
                        <TabPanel value={this.state.tabValue} index={3}>
                            <div className="favouritetab">
                                <div className="mediatab">
                                    <h3>This Month</h3>
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}

export default MediaLinksDocsTabs;
