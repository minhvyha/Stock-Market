import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../App';

function Account() {
	const [isDropDown, setIsDropDown] = useState(false);
	const { handleSignOut, user } = useContext(MainPageContext);
	function handlePopUp() {
		document.getElementById('sign-out-form').style.display = 'grid';
	}
	function handleCancel() {
		document.getElementById('sign-out-form').style.display = 'none';
	}
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

	// const filterList = (searchTerm) => {
	// 	const optionsList = document.querySelectorAll('.option');
	// 	searchTerm = searchTerm.toLowerCase();
	// 	optionsList.forEach((option) => {
	// 		let label =
	// 			option.firstElementChild.nextElementSibling.innerText.toLowerCase();
	// 		if (label.indexOf(searchTerm) != -1) {
	// 			option.style.display = 'block';
	// 		} else {
	// 			option.style.display = 'none';
	// 		}
	// 	});
	// };

	return (
		<div className="main-container">
			<div className="sign-out-container">
				<h2 className="sign-out-name">{user.name}</h2>
				<div className="eye-disability-support-container">
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

						{/* <div class="search-box">
							<input
								type="text"
								placeholder="Start Typing..."
								onKeyUp={function (e) {
									filterList(e.target.value);
								}}
							/>
						</div> */}
					</div>
				</div>
				<button className="btn-sign-out" onClick={handlePopUp}>
					Sign Out
				</button>
				<div id="sign-out-form">
					<div className="sign-out-inner">
						<h4>Are you sure you want to sign out?</h4>
						<div className="sign-out-action-container">
							<button className="cancel-btn" onClick={handleCancel}>
								CANCEL
							</button>
							<button
								className="real-btn-sign-out"
								onClick={handleSignOut}
							>
								<Link to="/intro">SIGN OUT</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Account;
