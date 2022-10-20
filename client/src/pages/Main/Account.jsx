import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../App';

function Account() {
	const { handleSignOut, user } = useContext(MainPageContext);
	function
	return (
		<div className="main-container">
			<div className="sign-out-container">
				<h2 className="sign-out-name">{user.name}</h2>
				<button className="btn-sign-out" onClick={handleSignOut}>
						Sign Out
				</button>
				<div className='sign-out-form'>
					<h4>Are you sure you want to sign out?</h4>
					<button>CANCEL</button>
					<Link to="/intro">
						<button onClick={handleSignOut}>
							SIGN OUT
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Account;
