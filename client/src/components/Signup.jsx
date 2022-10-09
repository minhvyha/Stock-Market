import React, {useEffect} from 'react';
import SignUpImage from '../assets/images/SignUp.png';
import { Link } from 'react-router-dom';

function Signup({ error, handleCallBackResponse, setUser }) {
  const [errorLogin, setErrorLogin] = useState();
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
    google.accounts.id.prompt();
  }, []);

  function handleSignUp(){

    setUser({name: 'asdf'})
  }
  function checkError(login) {
    let email = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;
    if (email === '') {
      setErrorLogin('Please enter username.');
      return;
    }
    if (password === '') {
      setErrorLogin('Please enter password.');
      return;
    }
    if (email.match(emailRegex) === null) {
      setErrorLogin('Invalid email.');
      return;
    }
    if (password.match(passwordRegex) === null) {
      setErrorLogin(
        'Password must have minimum length of 8 and contain at least one letter and one number.'
      );
      return;
    }
  }
  return (
    <div className="login-container" id="login-container">
      <img src={SignUpImage} alt="Sign In Image" className="signin-image" />
      <div className="login-form-container">
        <h1 className="login-form-title">Sign Up</h1>
        {error && <p className="error-text-form">{error}</p>}
        <div class="txt_field">
          <input type="text" id="email-login" required />
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input type="password" id="password-login" required />
          <span></span>
          <label>Password</label>
        </div>

        <div class="txt_field">
          <input type="password" id="confirmation-login" required />
          <span></span>
          <label>Confirm Password</label>
        </div>

        <button onClick={handleSignUp} className="submit-button">
          Sign Up
        </button>
        <div id="signInDiv"></div>
        <Link to="/signup">
          <div class="signup_link">
            Joined us before? <a>Login</a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
