import React from 'react';


const TextLength = (props) => {
	return (
		<div>
			<p>{props.length}</p>
			{props.length > 5 ? <p>Too Long</p> : <p>Perfectly Fine</p>}
		</div>
		)
}

export default TextLength;