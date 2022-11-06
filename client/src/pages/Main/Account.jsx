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

		if (optionsContainer.classList.contains('active')) {
			searchBox.focus();
		}
	}
	// const selected = document.querySelector('.selected');
	// const optionsContainer = document.querySelector('.options-container');
	// const searchBox = document.querySelector('.search-box input');

	// const optionsList = document.querySelectorAll('.option');

	// selected.addEventListener('click', () => {
	// 	optionsContainer.classList.toggle('active');

	// 	searchBox.value = '';
	// 	filterList('');

	// 	if (optionsContainer.classList.contains('active')) {
	// 		searchBox.focus();
	// 	}
	// });

	// optionsList.forEach((o) => {
	// 	o.addEventListener('click', () => {
	// 		selected.innerHTML = o.querySelector('label').innerHTML;
	// 		optionsContainer.classList.remove('active');
	// 	});
	// });

	// searchBox.addEventListener('keyup', function (e) {
	// 	filterList(e.target.value);
	// });

	const filterList = (searchTerm) => {
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
							<div class="option">
								<input
									type="radio"
									class="radio"
									id="automobiles"
									name="category"
								/>
								<label for="automobiles">Automobiles</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="film"
									name="category"
								/>
								<label for="film">Film & Animation</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="science"
									name="category"
								/>
								<label for="science">Science & Technology</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="art"
									name="category"
								/>
								<label for="art">Art</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="music"
									name="category"
								/>
								<label for="music">Music</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="travel"
									name="category"
								/>
								<label for="travel">Travel & Events</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="sports"
									name="category"
								/>
								<label for="sports">Sports</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="news"
									name="category"
								/>
								<label for="news">News & Politics</label>
							</div>

							<div class="option">
								<input
									type="radio"
									class="radio"
									id="tutorials"
									name="category"
								/>
								<label for="tutorials">Tutorials</label>
							</div>
						</div>

						<div class="selected" onClick={selectBoxClick}>
							Select Video Category
						</div>

						<div class="search-box">
							<input type="text" placeholder="Start Typing..." />
						</div>
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
