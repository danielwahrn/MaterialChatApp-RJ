import React, { Component } from "react";
import { Avatar,Button,IconButton,List,ListItem, ListItemAvatar,Link,ListItemText, Typography,Box,FormLabel } from '@material-ui/core';
import renderHTML from 'react-render-html';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class BillDetail extends Component {
    constructor() {
        super();
        this.state = {
            members:[]
        };
    }
    componentDidMount(){
        this.setState({members:this.props.members})
    }
    onSubmit(){
        console.log('done');
        this.props.hideBillDetails();
    }
    deselectUser(selecteditem) {
        let { members } = this.state;
        var hasSelectedItem = members.find(function (item) {
            return item.id === selecteditem.id ? true : false;
        });
        if (typeof hasSelectedItem !== 'undefined' && hasSelectedItem) {
            let filteredArray = members.filter(item => item.id !== selecteditem.id)
            this.setState({ members: filteredArray });
        }
    }
    showSelectdListItem(item, j) {
        return <ListItem key={j} disableGutters={true}>
            <Link component="button" className="closeIcon"
                variant="body2"
                onClick={() => this.deselectUser(item)}>
                <ListItemAvatar>
                    <Avatar>
                        <Avatar alt="" src={item.image} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    secondary={item.name}
                /></Link>
        </ListItem>
    }
    
    renderHistory(bill, i) {       
        return ( 
            <Button className="spacing-lr pt-20 bill-data-link" color="inherit" fullWidth onClick={() => this.props.showBillDetails(bill.id)}>
                <div key={i} className="bill-data">
                    <Avatar className="avatar" alt="Remy Sharp"
                        src={(bill.avatar)} />
                    <div className="bill-desc">
                        <h4><span>{bill.title}</span> {bill.date}</h4>
                        <p>Recurs {bill.recurs}</p>
                        <p>Arranged By {bill.arranged_by}</p>
                        <p>
                            {typeof bill.amount !== 'undefined'?(<>Amount <span>{bill.amount}</span></>):""}
                            {typeof bill.amount_usd !== 'undefined'?(<>Amount (USD) <span>{bill.amount_usd}</span></>):""}
                        </p>
                    </div>
                </div>
                <KeyboardArrowRightIcon style={{marginLeft:'auto'}} />
            </Button>
        );
    }
    
   
  
    render() {
        const { billDetail } = this.props;
        const {members} = this.state;
        return (
            <div className="bill-details-wrap">  
            {(members.length > 0) ? (
                        <List className="selected-userlist" disablePadding={true} >
                            {members.map((item, j) => this.showSelectdListItem(item, j))}
                        </List>
                    ) : ('')}
                    <Box p={1} className="text-center">
                        <div className="payment">
                            <FormLabel>YOU PAY</FormLabel>
                            <Typography variant="h4">AUD 50.00</Typography>
                        </div>

                        <Typography variant="h6">You paid <span className="color-orange">$50.00</span></Typography>
                        <Typography variant="h6">out of <span className="color-orange">$75.00</span></Typography>
                        <Typography variant="h6">raised so far</Typography>
                    </Box>
                    <div className="text-center leave-group-btn">
                        <Button
                            onClick={this.onSubmit.bind(this)}
                            size="small"
                            className="btn btn-small bg-orange btn-rounded color-white"
                            variant="contained">Next</Button>
                    </div>
            </div>
        );
    }
}

export default BillDetail;