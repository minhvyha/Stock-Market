import React from 'react';
import './StatusPopUp.css';
import './PopUp.css';

function FailPopUp({ message }) {
	return (
		<div className="popup-modal error" id="error-modal">
			<div className="popup" id="error-content">
				<div className="error-content">
					<div className="imgbox">
						<img src="src/img/cancel.png" alt="" className="img" />
					</div>
					<div className="title">
						<h3>Sorry :(</h3>
					</div>
					<p className="para">
						Something went wrong. Please mannually make a copy of your
						folder and try again!
					</p>
					<a href="#" className="button" id="error-resolve">
						TRY AGAIN
					</a>
				</div>
			</div>
		</div>
	);
}

export default FailPopUp;
