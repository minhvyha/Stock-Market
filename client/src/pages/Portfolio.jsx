import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
	return (
		<>
			<Link to="/intro">
				<button className="btn-sign-out" onClick={handleSignOut}>
					Sign Out
				</button>
			</Link>
		</>
	);
}

export default Portfolio;
