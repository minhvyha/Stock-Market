import React, { useState, useEffect } from 'react';
import { Symbol } from './SP500';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Home from './pages/Main/Home';
import ProtectedRoute from './pages/Layout/ProtectedRoute';
import ShareLayout from './pages/Layout/ShareLayout';
import Intro from './pages/Login/Intro';
import Features from './pages/Login/Features';
import Assets from './pages/Login/Assets';
import News from './pages/Login/News';
import Demo from './pages/Login/Demo';
import Portfolio from './pages/Main/Portfolio';
import Account from './pages/Main/Account';
import Buy from './pages/Main/Buy';
import Sell from './pages/Main/Sell';
import SuccessPopUp from './components/SuccessPopUp';
import FailPopUp from './components/FailPopUp';
import Loader from './components/Loader';

// https://cloud.iexapis.com/stable/stock/AAPL/quote?token=

export const MainPageContext = React.createContext();

function App() {
	const [user, setUser] = useState({
		// name: 'Minh Vy Ha',
		// stock: {},
		// cash: 100_000,
	});
	const [data, setData] = useState();
	const [isLightMode, setIsLightMode] = useState(true);
	const [successPopUpOpen, setSuccessPopUpOpen] = useState(false);
	const [stock, setStock] = useState('AAPL');
	function handleSignOut(event) {
		setUser({});
	}

	return (
		<BrowserRouter>
			<MainPageContext.Provider
				value={{
					Symbol,
					user,
					data,
					stock,
					setStock,
					handleSignOut,
					setIsLightMode,
				}}
			>
				<Routes>
					<Route path="/" element={<ShareLayout />}>
						<Route index element={<Navigate to="/home" />} />
						<Route
							path="/home"
							element={
								<ProtectedRoute user={user}>
									<Home />
								</ProtectedRoute>
							}
							key={nanoid()}
						/>
						<Route
							path="portfolio"
							element={
								<ProtectedRoute user={user}>
									<Portfolio />
								</ProtectedRoute>
							}
						/>
						<Route
							path="account"
							element={
								<ProtectedRoute user={user}>
									<Account />
								</ProtectedRoute>
							}
						/>
						<Route
							path="buy"
							element={
								<ProtectedRoute user={user}>
									<Buy />
								</ProtectedRoute>
							}
						/>
						<Route
							path="sell"
							element={
								<ProtectedRoute user={user}>
									<Sell />
								</ProtectedRoute>
							}
						/>
					</Route>
					<Route path="intro" element={<Intro />} />
					<Route path="assets" element={<Assets />} />
					<Route path="learn" element={<News />} />
					<Route path="features" element={<Features />} />
					<Route path="demo" element={<Demo />} />
					<Route path="login" element={<Login setUser={setUser} />} />
					<Route path="signup" element={<Signup setUser={setUser} />} />
				</Routes>
			</MainPageContext.Provider>
		</BrowserRouter>
	);
}

export default App;
