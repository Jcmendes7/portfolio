/* eslint-disable react/react-in-jsx-scope */
import {Route, Routes} from 'react-router-dom';
import {DefaultLayout} from './layouts/DefaultLayout';
import {Home} from './Screens/Home';

export function Router() {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout/>}>
				<Route path='/' element={<Home/>}/>
			</Route>
		</Routes>
	);
}
