import React, { Component } from "react";
import { Avatar,Button,IconButton, Grid } from '@material-ui/core';
import renderHTML from 'react-render-html';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BillsDetail from './BillsDetail';

class BillHistoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billId: '',
            viewBillDetails: false,
        };
        this.hideBillDetails = this.hideBillDetails.bind(this);
    }

    hideBillDetails(){
        this.props.billProfilePage();
        //this.setState({viewBillDetails: false,billId: ''});
    }
    
    render() {
       
        return (
            <>  
                <Grid item md={12}>
                    <BillsDetail members={this.props.members} bill={this.state.billId} hideBillDetails={this.hideBillDetails}/>
                </Grid>
            </>
        );
    }
}

export default BillHistoryList;