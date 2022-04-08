import { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState(null);
	const [error, setError] = useState();

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				console.log('this is res >>', res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.error('this is err >>', err);
				setError(err.message);
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className='flex flex-col justify-center items-center min-h-screen mx-auto gap-4'>
			<h1 className='mt-24 text-center text-gray-700 font-bold uppercase'>
				This is title
			</h1>

			<div className='container mx-auto flex flex-wrap justify-center'>
				{posts &&
					posts.map((post) => <Card key={post.id} data={post} />)}
				{loading && (
					<div className='text-4xl pt-32 text-red-400'>
						Loading...
					</div>
				)}
				{error && <div className='text-4xl text-red-400'>{error}</div>}
			</div>
		</div>
	);
};

export default Posts;
