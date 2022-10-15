import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

function ShareLayout() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default ShareLayout;
