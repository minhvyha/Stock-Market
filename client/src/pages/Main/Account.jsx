import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../App';

function Account() {
	const { handleSignOut, user } = useContext(MainPageContext);
	function handlePopUp() {
		document.getElementById('sign-out-form').style.display = 'grid';
	}
	function handleCancel() {
		document.getElementById('sign-out-form').style.display = 'none';
	}
	return (
		<div className="main-container">
			<div className="sign-out-container">
				<h2 className="sign-out-name">{user.name}</h2>
				<button className="btn-sign-out" onClick={handlePopUp}>
					Sign Out
				</button>
				<div id="sign-out-form">
					<div className="sign-out-inner">
						<h4>Are you sure you want to sign out?</h4>
						<div className='sign-out-action-container'>
						<button onClick={handleCancel}>CANCEL</button>
						<Link to="/intro">
							<button onClick={handleSignOut}>SIGN OUT</button>
						</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Account;
