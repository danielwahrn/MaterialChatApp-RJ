import React from "react";

import ChatDetailsHeader from "./ChatDetailsHeader";
import PersonDetails from '../../sharedUI/PersonDetails';

class GroupMemberDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            groupImage: require("../../../../assets/images/groupIcon.png"),
            name: 'Susie Peak', 
            phone: '+61 0407 138 267',
            email: 'susie@gmail.com',
            nickname: 'Apple Juice',
            checked: false,
            view:'detail',
            billId: '',
            viewBillDetails: false,
            personId: '',
        };
        this.handleChange = this.handleChange.bind(this);        
    }
    
    handleChange = name => event => {
        var value = event.target.value;
        this.setState((state) => ({
            formData: {
                ...state.formData,
                [name]: value,
            }
        }));
    };
    mediaChange(event){
        this.setState({
            groupImage: URL.createObjectURL(event.target.files[0])
          })
    }

    render() {
        return (
        <>           
            <div className="sidebar-wrap">
                <ChatDetailsHeader 
                    classNames="bg-red color-white" 
                    title={this.props.title} 
                    icon="back"
                    closeAction={this.props.closeAction} />
                <div className="chatdetails-main groupchatDetails-main sidebar-content">
                    <PersonDetails />
                </div>
            </div>
        </>);
    } 
}

export default GroupMemberDetail
