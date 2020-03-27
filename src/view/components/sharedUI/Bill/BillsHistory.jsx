import React, { Component } from "react";
import { Avatar,Button,IconButton } from '@material-ui/core';
import renderHTML from 'react-render-html';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class BillsHistory extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    renderHistory(bill, i) {
        
        // const { currentMember } = this.props;
        // const messageFromMe = member.id === currentMember.id;
        // const messageFromOther = member.id === 3;

        // const className = messageFromMe ? "Messages-message currentMember" : "Messages-message" &&
        //     messageFromOther ? "Messages-message OtherMember" : "Messages-message";

            // avatar: require('../../../../assets/images/groupIcon.png'),
            // title: 'Broken window',
            // date:'14/08/2017',
            // recurs: 'on the 5th of every month',
            // arranged_by: 'Albert Nash',
            // amount_usd: '$17 / $58'
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
        const { billHistory } = this.props;
       
        return (
            <>  
                {typeof billHistory !== 'undefined' && billHistory.length > 0 && 
                    billHistory.map((m, i) => this.renderHistory(m, i))}
            </>
        );
    }
}

export default BillsHistory;