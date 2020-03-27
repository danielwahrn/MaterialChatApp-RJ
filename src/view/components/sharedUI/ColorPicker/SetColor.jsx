import React from 'react';

const setcolor = (props) => {
	return(
		<li><button onClick={props.changeEvent} style={{ background: props.color }}></button></li>
	)
};

export default setcolor;	