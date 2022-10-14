import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../App';

function Account() {
	const { handleSignOut } = useContext(MainPageContext);
	return (
		<div className='main-container'>
			<Link to="/intro">
				<button className="btn-sign-out" onClick={handleSignOut}>
					Sign Out
				</button>
			</Link>
		</div>
	);
}

export default Account;
