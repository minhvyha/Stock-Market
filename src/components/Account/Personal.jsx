import React, { useContext, useState } from 'react';
import { MainPageContext } from '../../App';
import { styles } from '../../styles';
import Loading from '../Loading';

function Personal() {
  const { user, setUser } = useContext(MainPageContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user.name);
  const [dob, setDob] = useState(user.dob);
  var dobRegex =
    /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;

  async function handleSubmit(){
    setLoading(true)
    setError(null);
    if(name === '' || dob === ''){
      setError('Invalid form.')
      return
    }
    if (dob.match(dobRegex) === null) {
      setError('Invalid date of birth.')
      return
    }
    var baseUrl = `https://futuris.cyclic.app/${process.env.REACT_APP_DATABASE_KEY}/editUser`;
    let buyResult = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        name: name,
        dob: dob
      }),
    });
    let newUser = await buyResult.json();
    setUser(newUser);
    setLoading(false)
  }

  function setError(error){
    if (error === null) {
      document.getElementById('personal-error-message').innerHTML = ``;
      return;
    }
    setLoading(false)
    document.getElementById('personal-error-message').innerHTML = `* ${error}`;

  }

  return (
    <div className="personal-container flex gap-6 flex-col">
      <h3 className={styles.sectionHeadText}>My details</h3>
      <div id="personal-error-message" className="text-red-500 text-left"></div>

      <div className="personal-name">
        <input
          type="text"
          className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-60"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div className="personal-email">
        <input
          type="text"
          className="bg-tertiary py-4 px-6   placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-60"
          value={user.email}
          disabled={true}
        />
      </div>
      <div className="personal-dob">
        <input
          type="text"
          className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-60"
          onChange={(e) => {
            setDob(e.target.value);
          }}
          value={dob}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-main-color py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
      >
        {loading ? 'Changing...' : 'Change'}
      </button>
      {loading && <Loading />}

    </div>
  );
}

export default Personal;
