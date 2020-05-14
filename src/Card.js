import React from 'react';

const Card = () => {
	return (
		//light green background | inline-block | border 3 | padding 3 | margin 3 | grow on hover
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
			<img alt='robot card' src="https://robohash.org/hellomyfriends?200x200"></img>
			<div>
				<h2>Jane Doe</h2>
				<p>jane.doe@gmail.com</p>
			</div>
		</div>
	);
}

export default Card
