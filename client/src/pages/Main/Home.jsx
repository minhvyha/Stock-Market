import React, { useContext, useEffect, useState } from 'react';
import LineChart from '../../components/LineChart';
import { MainPageContext } from '../../App';

function Home() {
	const [isDropDown, setIsDropDown] = useState(false);
	const {
		data,
		stock,
		options,
		setStock,
		dataOption,
		handleChoose,
		fetchData,
	} = useContext(MainPageContext);
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
	let fontSize = ['Small', 'Medium', 'Large'];
	let optionList = fontSize.map((value) => {
		return (
			<div
				class="option"
				onClick={() => {
					console.log(value);
					document.querySelector('.selected').innerHTML = `${value}`;
					setIsDropDown((value) => !value);
				}}
			>
				<input
					type="radio"
					class="radio"
					id={`font-size-${value}`}
					name="category"
				/>
				<label for="automobiles">{value}</label>
			</div>
		);
	});
	const filterList = (searchTerm) => {
		const optionsList = document.querySelectorAll('.option');
		searchTerm = searchTerm.toLowerCase();
		optionsList.forEach((option) => {
			let label =
				option.firstElementChild.nextElementSibling.innerText.toLowerCase();
			if (label.indexOf(searchTerm) != -1) {
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
				<div>Font Size: </div>
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
							Select Video Category
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
					<input
						type="text"
						name="symbolList"
						id="symbolList"
						list="symbolData"
						className="symbol-list-box"
						value={stock}
						onChange={(e) => setStock(e.target.value)}
						placeholder="Symbol"
					/>
					<button className="btn check-btn" onClick={handleChoose}>
						See Price
					</button>
				</div>
				<datalist id="symbolData">{dataOption}</datalist>
				<div className="action-container">
					<div className="action-buy">Buy</div>
					<div className="action-sell">Sell</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
