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
		name: 'Minh Vy Ha',
		stock: {},
		cash: 100_000,
	});
	const [data, setData] = useState();
	const [isLightMode, setIsLightMode] = useState(true);
	const [successPopUpOpen, setSuccessPopUpOpen] = useState(false);
	const [failPopUpOpen, setFailPopUpOpen] = useState(false);
	const [loaderPopUp, setLoaderPopUp] = useState(false);
	const [isErrorReceiveStock, setIsErrorReceiveStock] = useState(false);
	const [options, setOption] = useState();
	const [stock, setStock] = useState('AAPL');
	function handleSignOut(event) {
		setUser({});
	}

	async function getData(symbol) {
		const apiData = await fetch(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`
		);
		setStock('');
		const convertData = await apiData.json();
		let data = [
			{
				id: convertData['Meta Data']['2. Symbol'],
				color: '#284699',
				data: [],
			},
		];
		let dataYear = await convertData['Time Series (Daily)'];
		let arrayData = [];
		for (const [key, val] of Object.entries(dataYear)) {
			arrayData.unshift({
				x: key,
				y: (parseFloat(val['1. open']) + parseFloat(val['3. low'])) / 2,
			});
		}
		data[0]['data'] = arrayData;
		return data;
	}

	async function fetchData(defaultFetch = true) {
		toggleLoader(true);
		try {
			let data = await getData(stock);
			setData(data);
		} catch (err) {
			openResolveModal(false);
			toggleLoader(false);
			setIsErrorReceiveStock(true);
			throw 'Cannot retrieve stock price.';
		}
		toggleLoader(false);
		if (!defaultFetch) {
			openResolveModal(true);
		}
	}

	function handleChoose() {
		fetchData(false);
	}

	function openResolveModal(isSuccess) {
		if (isSuccess) {
			setSuccessPopUpOpen(true);
		} else {
			setFailPopUpOpen(true);
		}
	}

	function closeResolveModal() {
		setSuccessPopUpOpen(false);
		setFailPopUpOpen(false);
	}

	function toggleLoader(display) {
		if (display) {
			setLoaderPopUp(true);
		} else {
			setLoaderPopUp(false);
		}
	}

	return (
		<BrowserRouter>
			<MainPageContext.Provider
				value={{
					Symbol,
					user,
					options,
					data,
					xAxis,
					setStock,
					handleChoose,
					handleSignOut,
					isErrorReceiveStock,
					fetchData,
					openResolveModal,
					closeResolveModal,
					setIsErrorReceiveStock,
					toggleLoader,
					setIsLightMode,
				}}
			>
				{successPopUpOpen === true && <SuccessPopUp />}
				{failPopUpOpen === true && <FailPopUp />}
				{loaderPopUp === true && <Loader />}
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
					<Route path="login" element={<Login setUser={setUser} />} />
					<Route path="signup" element={<Signup setUser={setUser} />} />
				</Routes>
			</MainPageContext.Provider>
		</BrowserRouter>
	);
}

export default App;
