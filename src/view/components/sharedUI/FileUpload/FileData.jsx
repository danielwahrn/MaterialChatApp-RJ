import React from 'react';
import { Avatar } from '@material-ui/core';

const FileData = (props) => {
	return(
		<div className="file-main">
			<div className="file-img">
				<Avatar className="avatar" alt="gallery image" src={(props.replica)} />
			</div>
			<div className="file-details">
				<h3>{props.filename}</h3>
				<p>{props.noofpages + 'page'} + {props.size} + {props.type}</p>
			</div>
		</div>
	)
};

export default FileData;	