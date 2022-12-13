import React from 'react';

function SuccessPopUp() {
	return (
		<div class="popup-modal success" id="success-modal">
			<div class="popup" id="success-content">
				<div class="success-content">
					<div class="imgbox">
						<img src="src/img/checked.png" alt="" class="img" />
					</div>
					<div class="title">
						<h3>Success!</h3>
					</div>
					<p class="para">
						Your website has been decarbonize successfully
					</p>
					<p class="success-note">
						* Note that dependencies may mark up the data
					</p>
					<a href="#" class="button" id="success-resolve">
						OKAY
					</a>
				</div>
			</div>
		</div>
	);
}

export default SuccessPopUp;
