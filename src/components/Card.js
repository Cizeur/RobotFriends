import React from 'react';

const Card = ({name, email, id }) => {
	return (
		//light green background | inline-block | border 3 | padding 3 | margin 3 | grow on hover | border width 2 and shadow 5
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot card' src={`https://robohash.org/${id}?size=200x200`}></img>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card
