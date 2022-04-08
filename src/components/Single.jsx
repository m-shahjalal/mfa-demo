/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const url = 'https://jsonplaceholder.typicode.com/posts';

const Single = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [post, setPost] = useState(null);
	const [error, setError] = useState();

	const handleClick = () => {
		setLoading(true);
		axios
			.get(`${url}/${id}`)
			.then((res) => {
				setPost(res.data);
				setError(null);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	const asyncHandleClick = async () => {
		try {
			const res = await axios.get(`${url}/${id}`);
			setPost(res.data);
			setError(null);
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPost(null);
		}
	};

	return (
		<div className='min-h-screen flex justify-center items-center flex-col gap-12'>
			<button
				disabled={!!post}
				onClick={asyncHandleClick}
				className='py-1.5 px-4 transition-colors bg-green-500 border cursor-pointer disabled:cursor-not-allowed text-base border-gray-300 text-gray-50 rounded-lg disabled:opacity-50 '>
				{loading
					? 'loading...'
					: post
					? 'done'
					: 'Do you want to see the post?'}
			</button>
			{post && (
				<div className='w-80 p-4 shadow m-4'>
					<h1>{post.title.slice(0, 20)}</h1>
					<p className='text-base text-justify'>{post.body}</p>
				</div>
			)}
			{error && <div className='text-red-500'>{error}</div>}
		</div>
	);
};

export default Single;
