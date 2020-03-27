import React from 'react';
import { Avatar, AppBar, Toolbar, Typography, IconButton, Paper, Button, TextField, FormLabel, Grid,ListItem, ListItemAvatar,
        List,ListItemIcon,ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import {DashboardModel} from '../../DashboardModel';

import DateFnsUtils from "@date-io/date-fns";
import {
	DatePicker,
	MuiPickersUtilsProvider
} from "@material-ui/pickers";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import HexagonBtn from '../../HexagonBtn';
import BillUserList from './BillUserList';
import BillHistoryList from './BillHistoryList';
import BillProfile from './BillProfile';

let members = [{
  	id: 1,
  	name: "You",
  	image: require('../../../../assets/images/user-img.png'),
},
{
  	id: 2,
  	name: "John",
  	image: require('../../../../assets/images/user-img.png'),
},
{
  	id: 3,
  	name: "Maria",
  	image: require('../../../../assets/images/user-img.png'),
},
{
  	id: 4,
  	name: "Albert",
  	image: require('../../../../assets/images/user-img.png'),
}];

class Bill extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			show:false,
			page:''
    	};

    this.billHistoryPage = this.billHistoryPage.bind(this);
    this.billProfilePage = this.billProfilePage.bind(this);
  	}

  	componentDidMount() {
     	DashboardModel.openModel('billmodal');
  	}

	billHistoryPage() {
		//DashboardModel.openModel('remove');
		document.getElementById('dashboardmenumodal').remove();
		document.body.classList.remove('dashboard-modal-open');
		this.setState({page: 'billhistory'});
	}

	billProfilePage() {
		this.setState({page: 'billprofile'});
	}

  	billDone() {}

	renderPage() {
		switch(this.state.page) {
			case '':
				return <BillUserList members={members} billHistoryPage={this.billHistoryPage}/>;
			case 'billhistory':
				return <BillHistoryList members={members} billProfilePage={this.billProfilePage}/>;
			case 'billprofile':
				return <BillProfile goBack={this.goBack} members={members} billDone={this.billDone}/>;
		}
	}

	goBack() {
		this.props.close_form()
	}

	goBack(e){
		e.preventDefault();
		document.getElementById('dashboardmenumodal').remove();
		document.body.classList.remove('dashboard-modal-open');
		//DashboardModel.close('billmodal')(e);
		this.props.close_form()
	}

	render() {
		return (
		<>
		
			<div className="sidebar-wrap side-container">
			<AppBar className="header-top sidebar-header bg-orange color-white " position="static">
				<Toolbar>
				<IconButton
					edge="start"
					aria-label="account of current user"
					aria-haspopup="true"
					color="inherit"
					onClick={this.props.close_form}
				>
					<KeyboardArrowLeftIcon />
				</IconButton>
				<Typography variant="body2" className="detailsTitle">CREATE NEW BILL</Typography>
				</Toolbar>
			</AppBar>
			<Paper square className="menu-contents-wrap sidebar-content dashboard-form">
			{this.state.show?(
				this.renderPage()            
			):('')}
			</Paper>
			<DashboardModel id="billmodal" outsideClickClose={false} removeUnmount={false}>
				<div className="model-content">
					<h1>Hey there champ!</h1>
					<p>Do you know your bills target amount?</p>
					<div className="button-right">
						<Button variant="contained" className="btn bg-orange btn-rounded"
							onClick={(e) => { DashboardModel.close('billmodal')(e); this.setState({show:true})}}>Yes</Button>
						<Button variant="contained" className="btn bg-gray btn-rounded"
							onClick={(e) => { this.goBack(e) }}>No</Button>
					</div>
				</div>
			</DashboardModel>
			</div>

		</>
		);
	}
}



export default Bill;