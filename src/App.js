import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from './components/Single';
import Login from './pages/Login';
import Posts from './pages/Posts';

export default function App() {
	return (
		<h1 className='text-3xl'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Posts />} />
					<Route path='/login' element={<Login />} />
					<Route path='/posts' element={<Posts />} />
					<Route path='/posts/:id' element={<Single />} />
				</Routes>
			</BrowserRouter>
		</h1>
	);
}
