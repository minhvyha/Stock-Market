import React from 'react';
import './StatusPopUp.css';
import './PopUp.css';

function SuccessPopUp({ message }) {
	return (
		<div className="popup-modal success" id="success-modal">
			<div className="popup" id="success-content">
				<div className="success-content">
					<div className="imgbox">
						<img src="src/img/checked.png" alt="" className="img" />
					</div>
					<div className="title">
						<h3>Success!</h3>
					</div>
					<p className="para">
						Your website has been decarbonize successfully
					</p>
					<p className="success-note">
						* Note that dependencies may mark up the data
					</p>
					<a href="#" className="button" id="success-resolve">
						OKAY
					</a>
				</div>
			</div>
		</div>
	);
}

export default SuccessPopUp;
