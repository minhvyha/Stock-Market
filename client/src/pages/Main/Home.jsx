import React, { useContext, useEffect, useState } from 'react';
import LineChart from '../../components/LineChart';
import { MainPageContext } from '../../App';

function Home() {
	const [isDropDown, setIsDropDown] = useState(false);
	const { Symbol, data, options, setStock, handleChoose, fetchData } =
		useContext(MainPageContext);

	useEffect(() => {
		fetchData();
	}, []);

	function selectBoxClick() {
		const optionsContainer = document.querySelector('.options-container');
		const searchBox = document.querySelector('.search-box input');
		setIsDropDown((value) => !value);
		console.log(isDropDown);
		searchBox.value = '';
		filterList('');

		if (!optionsContainer.classList.contains('active')) {
			searchBox.focus();
		}
	}

	let optionList = Symbol.map((company) => {
		return (
			<div
				class="option"
				onClick={() => {
					setStock(company.Symbol);
					document.querySelector(
						'.selected'
					).innerHTML = `${company.Symbol}`;
					setIsDropDown((value) => !value);
				}}
			>
				<input
					type="radio"
					class="radio"
					id={`${company.Symbol}`}
					name="category"
				/>
				<label
					for={`${company.Symbol}`}
				>{`${company.Name} - ${company.Symbol}`}</label>
			</div>
		);
	});

	const filterList = (searchTerm) => {
		setStock(searchTerm);
		const optionsList = document.querySelectorAll('.option');
		searchTerm = searchTerm.toLowerCase();
		optionsList.forEach((option) => {
			let label =
				option.firstElementChild.nextElementSibling.innerText.toLowerCase();
			if (label.indexOf(searchTerm) !== -1) {
				option.style.display = 'block';
			} else {
				option.style.display = 'none';
			}
		});
	};

	return (
		<div className="main-container">
			<div className="chart-container">
				<LineChart
					className="main-line-chart"
					data={data}
					options={options}
				/>
			</div>
			<div className="side-container">
				<div className="choose-input-container">
					<div class="select-box">
						<div
							class={
								isDropDown
									? 'options-container active'
									: 'options-container'
							}
						>
							{optionList}
						</div>

						<div class="selected" onClick={selectBoxClick}>
							Select Symbol
						</div>

						<div class="search-box">
							<input
								type="text"
								placeholder="Start Typing..."
								onKeyUp={function (e) {
									filterList(e.target.value);
								}}
							/>
						</div>
					</div>
					<button className="btn check-btn" onClick={handleChoose}>
						See Price
					</button>
				</div>
				<div className="action-container">
					<div className="action-buy">Buy</div>
					<div className="action-sell">Sell</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
