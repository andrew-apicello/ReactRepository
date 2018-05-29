import React from 'react';

const userInput = (props) => {
	return (
		<input type='text' onChange={props.change} value={props.content}></input>
		)
};

export default userInput;