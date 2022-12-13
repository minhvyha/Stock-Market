import React from 'react';

function FailPopUp() {
	return (
		<div class="popup-modal error" id="error-modal">
			<div class="popup" id="error-content">
				<div class="error-content">
					<div class="imgbox">
						<img src="src/img/cancel.png" alt="" class="img" />
					</div>
					<div class="title">
						<h3>Sorry :(</h3>
					</div>
					<p class="para">
						Something went wrong. Please mannually make a copy of your
						folder and try again!
					</p>
					<a href="#" class="button" id="error-resolve">
						TRY AGAIN
					</a>
				</div>
			</div>
		</div>
	);
}

export default FailPopUp;
