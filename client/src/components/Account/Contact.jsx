import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import { styles } from '../../styles';

const Contact = () => {
	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
    let {name, email, message} = form
		if (name === '' || email === '' || message === '') {
			setError('Please fill out all the form.');
			return false;
		}
		if (email.match(emailRegex) === null) {
      setError('Invalid email.');
			return false;
		}
    function setError(err){
      document.getElementById('error-message').innerHTML = err
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (checkForm() === false){
      setLoading(false)
      return
    }
    
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Minh",
          from_email: form.email,
          to_email: "minhvy.ha@outlook.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex flex-col gap-8 overflow-hidden`}
    >
        <h3 className={styles.sectionHeadText}>Contact</h3>
      <p id='error-message' className='error-text-form'></p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              style={{resize: "none"}}
              placeholder='What you want to say?'
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
  );
};

export default Contact