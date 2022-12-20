import React, { useContext } from 'react';
import { MainPageContext } from '../../App';

function Personal() {
	const { user } = useContext(MainPageContext);
	return <div className='personal-container'>
      <div>{user.name}</div>
      <div>{user.cash}</div>
   </div>;
}

export default Personal;
