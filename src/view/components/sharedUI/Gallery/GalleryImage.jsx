import React from 'react';
import { Avatar } from '@material-ui/core';

const galleryimage = (props) => {
	return(
		<li onClick={props.changeEvent}>
			<Avatar className="avatar" alt="gallery image" src={(props.replica)} />
		</li>
	)
};

export default galleryimage;	