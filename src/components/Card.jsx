import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
	const { title, body, id } = data;
	return (
		<Link to={`/posts/${id}`} className='w-80 p-4 shadow m-4'>
			<h1>{title.slice(0, 20)}</h1>
			<p className='text-base text-justify'>{body}</p>
		</Link>
	);
};

export default Card;
