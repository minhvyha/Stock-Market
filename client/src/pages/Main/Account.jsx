import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../App';

function Account() {
	const { handleSignOut, user } = useContext(MainPageContext);
	return (
		<div className="main-container">
			<div className=''>

			<Link to="/intro">
				<button className="btn-sign-out" onClick={handleSignOut}>
					Sign Out
				</button>
			</Link>
			</div>
		</div>
	);
}

export default Account;
