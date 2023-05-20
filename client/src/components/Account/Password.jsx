import React, {useState, useRef} from 'react'
import { styles } from '../../styles';

function Password() {
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

  const formRef = useRef();
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
    function setError(err){
      document.getElementById('error-message').innerHTML = err
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (checkForm() === false){
      setLoading(false)
      return
    }

  };
  return (
    <div className={`xl:mt-12 flex flex-col gap-8 overflow-hidden`}>
        <h3 className={styles.sectionHeadText}>Change Password</h3>
        <p id='error-message' className='error-text-form'></p>

<form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' flex flex-col gap-8'
        >
          <label className='flex flex-row items-center'>
            <span className='text-white font-medium'>Old Password</span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-row items-center'>
            <span className='text-white font-medium'>Your email</span>
            <input
              type='password'
              name='newPassword'
              autoComplete=''
              value={form.newPassword}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-row items-center'>
            <span className='text-white font-medium'>Your Message</span>
            <input
              type='password'
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-main-color py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
    </div>
  )
}

export default Password