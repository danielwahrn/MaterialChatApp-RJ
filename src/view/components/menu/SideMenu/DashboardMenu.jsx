import React from 'react';
import HexagonBtn from '../../HexagonBtn';
import ChatArchive from '../../chat/ChatArchive';
import CreateFunRaise from '../funraise/CreateFunRaise';
import FunRaiseSummary from '../funraise/FunRaiseSummary';
import CreatePrivatechat from '../privatechat/CreatePrivatechat';
import Payment from '../../sharedUI/Payment/Payment';
import Bill from '../../sharedUI/Bill/Bill';

import Paper from '@material-ui/core/Paper';
import GroupMember from '../group-chat/GroupMember';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
import CreateGroupChat from '../group-chat/CreateGroupChat';
const chatIcon = require('../../../../assets/images/menu/chat.svg');
const billIcon = require('../../../../assets/images/menu/bill.svg');
const funraiseIcon = require('../../../../assets/images/menu/funraise.svg');
const paymentIcon = require('../../../../assets/images/menu/payment.svg');
const requestIcon = require('../../../../assets/images/menu/request.svg');
const splitIcon = require('../../../../assets/images/menu/split.svg');
const transferIcon = require('../../../../assets/images/menu/transfer.svg');
const groupchatIcon = require('../../../../assets/images/menu/group-chat.svg');
const privatechatIcon = require('../../../../assets/images/menu/private-chat.svg');

// const routes = [
//     {
//         path: '/dashboard/',
//         exact: true,
//         sidebar: () => <div>home!</div>,
//         main: () => <h2>Home</h2>
//     },
//     {
//         path: '/dashboard/bubblegum',
//         sidebar: () => <div>bubblegum!</div>,
//         main: () => ''
//     },
//     {
//         path: '/dashboard/shoelaces',
//         sidebar: () => <div>shoelaces!</div>,
//         main: () => <h2>Shoelaces</h2>
//     }
// ]

class DashboardMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show_menu: false,
            show_funraise_form: false,
            show_private_chat: false,
            show_group_chat: false,
            show_groupMembers: false,
            show_private_chat_summary: false,
            show_funraise_summary: false,
            show_bill: false
        };
    }
    componentDidMount() {
    }
    backToMenu = () => {
        this.setState({
            show_menu: false,
            show_funraise_form: false,
            show_private_chat: false,
            show_group_chat: false,
            show_groupMembers: false,
            show_private_chat_summary: false,
            show_funraise_summary: false,
            show_bill: false
        })
    }
    toggleMenu = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            show_menu: !state.show_menu
        }));
    }
    toggle_show_group_chat = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            show_group_chat: !state.show_group_chat,
            show_menu: false
        }))
    }
    toggle_show_funraise_form = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            show_funraise_form: !state.show_funraise_form,
            show_menu: false
        }))
    }
    showFunraiseSummary = (data) => {
        console.log('submited data', data);
        this.setState({
            show_funraise_form: false,
            show_menu: false,
            show_funraise_summary: true
        })
    }
    close_funraise_form = () => {
        this.setState({
            show_private_chat: false,
            show_funraise_summary: false,
            show_funraise_form: false,
            show_menu: false
        })
    }
    toggle_show_private_chat = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            show_private_chat: !state.show_private_chat,
            show_menu: false
        }))
    }
    close_private_chat = () => {
        this.setState({
            show_private_chat: false,
            show_menu: false
        })
    }

    toggle_show_bill = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            show_bill: !state.show_bill,
            show_menu: false
        }))
    }
    close_show_bill = () => {
        this.setState({
            show_bill: false,
            show_menu: false
        })
    }

    toggle_show_payment = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            show_payment: !state.show_payment,
            show_menu: false
        }))
    }
    close_show_payment = () => {
        this.setState({
            show_payment: false,
            show_menu: false
        })
    }

    render() {
        const commonProps = { close_form: this.backToMenu.bind(this) };
        return (
            <>
            <div>
                    {this.state.show_menu ? (<>
                        <div className="menu-overlay"></div>
                        <div className="main-menu-inner">
                            <div className="buttons-group">
                                <HexagonBtn href="#" icon={groupchatIcon} bg="red" color="white" text="Group"
                                    btnProps={{ onClick: (e) => { this.toggle_show_group_chat(e) } }}
                                />
                                <HexagonBtn href="#" icon={chatIcon} bg="red-dark" color="white" text="Chat" size="big" />
                                <HexagonBtn
                                    btnProps={{ onClick: (e) => { this.toggle_show_private_chat(e) } }}
                                    href="#" icon={privatechatIcon} bg="orange-red" color="white" text="Private" />
                            </div>
                            <div className="buttons-group">
                                <HexagonBtn
                                    btnProps={{ onClick: (e) => { this.toggle_show_funraise_form(e) } }}
                                    href="#" icon={funraiseIcon} bg="yellow" color="blue" text="FunRaise" />
                                <HexagonBtn
                                    btnProps={{ onClick: (e) => { this.toggle_show_bill(e) } }}
                                    href="#" icon={billIcon} bg="orange" color="blue" text="Bill" size="big" />
                                <HexagonBtn href="#" icon={splitIcon} bg="yellow-light" color="blue" text="Split" />
                            </div>
                            <div className="buttons-group">
                                <HexagonBtn href="#" icon={requestIcon} bg="green-light" color="white" text="Request" />
                                <HexagonBtn href="#" icon={transferIcon} bg="green" color="white" text="Transfer" size="big" />
                                <HexagonBtn 
                                    btnProps={{ onClick: (e) => { this.toggle_show_payment(e) } }}
                                    href="#" icon={paymentIcon} bg="green-dark" color="white" text="Payment" />
                            </div>
                        </div>
                    </>) : ('')}
                    {this.state.show_private_chat ? (
                        <CreatePrivatechat {...commonProps} />
                    ) : this.state.show_funraise_form ? (
                        <CreateFunRaise
                            {...commonProps}
                            showFunraiseSummary={this.showFunraiseSummary} />
                    ) : this.state.show_funraise_summary ? (
                        <FunRaiseSummary {...commonProps} />
                    ) : this.state.show_group_chat ? (
                        <CreateGroupChat {...commonProps} />
                    ) : this.state.show_groupMembers ? (
                        <GroupMember {...commonProps} showGroupChat={this.props.showGroupChat} />
                    ) :this.state.show_payment ? (
                        <Payment {...commonProps} />
                    ) :this.state.show_bill ? (
                        <Bill {...commonProps} />
                    ) :
                     (<ChatArchive showChat={this.props.showChat} setSideMenuPage={this.props.setSideMenuPage}/>)}

                    {/* {this.state.show_funraise_form ? (
                        <CreateFunRaise close_form={this.close_funraise_form.bind(this)} />
                    ) : this.state.show_funraise_summary} */}
                    { this.state.show_bill?'':
                    <HexagonBtn
                        btnProps={{ onClick: (e) => { this.toggleMenu(e) } }}
                        href="#"
                        className="new-btn uppercase"
                        bg="blue"
                        color="white"
                        text="New"
                        size="small" />
                    }
                </div>
            </>
        );
    }
}
export default DashboardMenu;