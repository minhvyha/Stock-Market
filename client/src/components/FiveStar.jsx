import React from 'react';
import './FiveStar.css';

function FiveStar() {
	return (
		<div className="five-star-container">
         <div className='star-comment'>
         Excellent
         </div>
			<span class="material-symbols-outlined star">star</span>
			<span class="material-symbols-outlined star">star</span>
			<span class="material-symbols-outlined star">star</span>
			<span class="material-symbols-outlined star">star</span>
			<span class="material-symbols-outlined star">star</span>
		</div>
	);
}

export default FiveStar;
