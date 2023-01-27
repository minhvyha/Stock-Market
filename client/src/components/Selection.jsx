import React, {useContext, useState} from 'react';
import { Symbol } from '../SP500';
import { MainPageContext } from '../App';
import { nanoid } from 'nanoid';

function Selection() {
   const [isDropDown, setIsDropDown] = useState(false);
   const {
		setStock,
	} = useContext(MainPageContext);

	function selectBoxClick() {
		const optionsContainer = document.querySelector('.options-container');
		const searchBox = document.querySelector('.search-box input');
		setIsDropDown((value) => !value);
		searchBox.value = '';
		filterList('');

		if (!optionsContainer.classList.contains('active')) {
			searchBox.focus();
		}
	}

	let optionList = Symbol.map((company) => {
		return (
			<div
				key={nanoid()}
				className="option"
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
					className="radio"
					id={`${company.Symbol}`}
					name="category"
				/>
				<label
					htmlFor={`${company.Symbol}`}
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
		<div className="choose-input-container">
			<div className="select-box">
				<div
					className={
						isDropDown ? 'options-container active' : 'options-container'
					}
				>
					{optionList}
				</div>

				<div className="selected" onClick={selectBoxClick}>
					Select Symbol
				</div>

				<div className="search-box">
					<input
						type="text"
						placeholder="Start Typing..."
						onKeyUp={function (e) {
							filterList(e.target.value);
						}}
					/>
				</div>
			</div>
			<button className="btn check-btn">
				See Price
			</button>
		</div>
	);
}

export default Selection;
