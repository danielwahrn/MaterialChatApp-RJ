import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const LinkTabData = (props) => {
	return(
		<div className="links-main">
			<div className="link-details">
	    		<div className="link-image">
					<Avatar className="avatar" alt="gallery image" src={(props.replica)} />
				</div>
				<div className="link-url">
	        		<div><Link to={'/'}>{props.channelurl}</Link></div>
	        		<div><Link to={'/'}>{props.siteurl}</Link></div>
	    		</div>
			</div>
			<div className="d-flex">
			    <div><Link to={'/'}>View message</Link></div>
			    <div>
			        <IconButton
			            edge="start"
			            aria-label="account of current user"
			            aria-haspopup="true"
			            color="inherit"
			        >
			            <KeyboardArrowRightIcon />
			        </IconButton>
			    </div>
			</div>
		</div>
	)
};

export default LinkTabData;	