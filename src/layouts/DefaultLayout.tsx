/* eslint-disable react/react-in-jsx-scope */
import {Header} from '../components/Header';
import {Outlet} from 'react-router-dom';
import {Footer} from '../components/footer';

export function DefaultLayout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
