import React from 'react';

const userOutput = (props) => {

	let customContent = props.content.replace("Name",props.name);

	if (props.name == "Lauren"){
		customContent = props.content.replace("he","she");
	}


	return (
		<div>
			<p>This is a story about {props.name}. {customContent}</p>
		</div>
		)
}

export default userOutput;