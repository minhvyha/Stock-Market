import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../App';
import './Account.css';

import Personal from '../../components/Account/Personal';

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
		setIsDropDown((value) => !value);
	}
	let fontSize = ['Small', 'Medium', 'Large'];
	let optionList = fontSize.map((value) => {
		return (
			<div
				className="option"
				onClick={() => {
					console.log(value);
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

	function changeFontSizeRoot(fontSize) {
		const root = document.querySelector(':root');
		root.style.setProperty('--my-color', 'blue');
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
				<div>Personal</div>
				<div>Password</div>
				<div>Appearance</div>
				<div>Help</div>
			</div>
			<div className='account-main-content'>
				
			</div>
			<div className="sign-out-container">
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
			</div>
		</div>
	);
}

export default Account;
