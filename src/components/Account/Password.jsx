import React, {useState, useRef, useContext} from 'react'
import { styles } from '../../styles';
import Loading from '../Loading';
import { MainPageContext } from '../../App';

function Password() {
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

  const formRef = useRef();
  const {user, setUser} = useContext(MainPageContext)
  const [form, setForm] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  function checkForm(){
    setError(null)
    let {password, confirmPassword, newPassword} = form
		if (password === '' || confirmPassword === '' || newPassword === '') {
			setError('Please fill out all the form.');
			return false;
		}
		if (confirmPassword !== newPassword) {
			setError('New password is not the same.');
			return false;
		}
    if (newPassword.match(passwordRegex) === null) {
			setError(
				'Password must have minimum length of 8 and contain at least one letter and one number.'
			);
			return true;
		}
  }
  function setError(error){
    if (error === null) {
      document.getElementById('error-message').innerHTML = ``;
      return;
    }
    setLoading(false)
    document.getElementById('error-message').innerHTML = `* ${error}`;

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (checkForm() === false){
      setLoading(false)
      return
    }
    var baseUrl = `https://protected-ridge-45795-fa6808efefb4.herokuapp.com/${process.env.REACT_APP_DATABASE_KEY}/${form.password}/changePassword`
		let result = await fetch(baseUrl, {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json'
			},
			body: JSON.stringify({
							email: user.email,
							password: form.newPassword
			})
	});
  let code = result.status
  if (code === 401){
    setError('Incorrect password or account register through google.')
    setLoading(false)
    return
  }
	let newUser = await result.json()
  setUser(newUser)
  setLoading(false)

  };
  return (
    <div className={`xl:mt-12 flex flex-col gap-4 overflow-hidden`}>
        <h3 className={styles.sectionHeadText}>Change Password</h3>
        <p id='error-message' className='error-text-form'></p>

<form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' flex flex-col gap-8'
        >
          <label className='flex flex-row items-center'>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="Old password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-row items-center'>
            <input
              type='password'
              name='newPassword'
              autoComplete=''
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-row items-center'>
            <input
              type='password'
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-main-color py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Changing..." : "Change"}
          </button>
        </form>
        {loading && <Loading />}
        
    </div>
  )
}

export default Password