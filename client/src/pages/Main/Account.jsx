import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../App';
import './Account.css';

import Personal from '../../components/Account/Personal';
import Appearance from '../../components/Account/Appearance';
import Password from '../../components/Account/Password';
import Help from '../../components/Account/Help';

function Account() {
	const [isDropDown, setIsDropDown] = useState(false);
	const [activeSetting, setActiveSetting] = useState(Personal);
	const { handleSignOut, user } = useContext(MainPageContext);

	let settingList = [
		{ name: 'personal', component: Personal },
		{ name: 'password', component: Password },
		{ name: 'appearance', component: Appearance },
		{ name: 'help', component: Help },
	];

	let settings = settingList.map((setting) => {
		return (
			<div
				id={`account-${setting.name}`}
				className="account-setting-list"
				onClick={() => {
					setActiveSetting(setting.component);
					document.getElementById('account-main-content').classList.add('account-active')
				}}
			>
				{capitalize(setting.name)}
			</div>
		);
	});

	let fontSize = ['Small', 'Medium', 'Large'];
	let optionList = fontSize.map((value) => {
		return (
			<div
				className="option"
				onClick={() => {
					document.querySelector('.selected').innerHTML = `${value}`;
					setIsDropDown((value) => !value);
				}}
			>
				<input
					type="radio"
					className="radio"
					id={`font-size-${value}`}
					name="category"
				/>
				<label for="automobiles">{value}</label>
			</div>
		);
	});

	function handlePopUp() {
		document.getElementById('sign-out-form').style.display = 'grid';
	}

	function handleCancel() {
		document.getElementById('sign-out-form').style.display = 'none';
	}

	function selectBoxClick() {
		setIsDropDown((value) => !value);
	}

	function changeFontSizeRoot(fontSize) {
		const root = document.querySelector(':root');
		root.style.setProperty('--my-color', 'blue');
	}

	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}

	function changeFontSize(value) {
		switch (value) {
			case 'Small':
			case 'Medium':
			case 'Large':
		}
	}

	return (
		<div className="main-container">
			<div className="account-navigation-bar">
				<div className="account-nav-title">Setting</div>
				{settings}
			</div>
			<div id='account-main-content' className="account-main-content">
				{activeSetting}
			</div>
			{/* <div className="sign-out-container">
				<h2 className="sign-out-name">{user.name}</h2>
				<div className="eye-disability-support-container">
					<div>Font Size: </div>
					<div className="select-box">
						<div
							className={
								isDropDown
									? 'options-container font-size-selector active'
									: 'options-container font-size-selector'
							}
						>
							{optionList}
						</div>

						<div className="selected" onClick={selectBoxClick}>
							Select Font Size
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
			</div> */}
		</div>
	);
}

export default Account;
