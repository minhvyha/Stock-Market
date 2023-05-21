import React, { useContext, useState } from 'react';
import { MainPageContext } from '../../App';
import { styles } from '../../styles';

function Personal() {
  const [loading, setLoading] = useState(false);
   
   var dobRegex = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/
   
	const { user } = useContext(MainPageContext);
	return <div className='personal-container flex gap-6 flex-col'>
        <h3 className={styles.sectionHeadText}>My details</h3>

      <div className='personal-name'>
         <input type="text" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-64' placeholder={user.name}/>
         
      </div>
      <div className='personal-email'>
         <input type="text" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-64' placeholder={user.email}/>
      </div>
      <div className='personal-dob'>
         <input type="text" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-64' placeholder={user.dob}/>
      </div>
      <button
            type='submit'
            className='bg-main-color py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Changing..." : "Change"}
         </button>
   </div>;
}

export default Personal;
