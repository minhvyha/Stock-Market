import React, { useContext } from 'react';
import { MainPageContext } from '../../App';

function Personal() {
	const { user } = useContext(MainPageContext);
	return <div className='personal-container'>
      <div className='personal-name'>{user.name}</div>
      <div className='personal-cash'>{user.cash}</div>
   </div>;
}

export default Personal;
