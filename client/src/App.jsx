import React, { useState, useEffect } from 'react';
import { Symbol } from './SP500';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
		money: 100000,
	});
	const [data, setData] = useState({
		datasets: [],
	});

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
		let labels = [];
		let data = [];
		let dataYear = await convertData['Time Series (Daily)'];
		for (const [key, val] of Object.entries(dataYear)) {
			labels.unshift(key);
			data.unshift(
				(parseFloat(val['1. open']) + parseFloat(val['3. low'])) / 2
			);
		}
		let datasets = [
			{
				label: 'Price',
				data: data,
				backgroundColor: 'rgba(197,208,234,.5)',
				borderColor: '#284799',
				borderWidth: 2,
				pointHover: 0,
				pointRadius: 0,
				pointHitRadius: 0,
				fill: true,
			},
		];
		return { labels, datasets };
	}

	async function fetchData() {
		let data = await getData(stock);
		setData(data);
		const options = {
			maintainAspectRatio: false,
			tension: 0.2,
			plugins: {
				tooltip: {
					yAlign: 'bottom',
					displayColors: false,
					bodyAlign: 'center',
					bodyColor: 'black',
					titleColor: 'black',
					borderColor: '#284799',
					borderWidth: 1,
					backgroundColor: 'white',
					titleAlign: 'center',
					interaction: {
						mode: 'index',
						axis: 'x',
					},
					intersect: false,
				},
				legend: {
					display: false,
				},
				title: {
					display: true,
					text: stock,
					padding: 15,
					color: 'black',
					font: {
						size: 16,
					},
				},
			},
		};
		setOption(options);
	}

	function handleChoose() {
		fetchData();
	}

	return (
		<BrowserRouter>
			<MainPageContext.Provider
				value={{
					Symbol,
					user,
					options,
					data,
					setStock,
					handleChoose,
					handleSignOut,
					fetchData,
					SuccessPopUp,
					FailPopUp,
					Loader,
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
