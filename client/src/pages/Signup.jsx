import React, { useEffect, useState } from 'react';
import SignUpImage from '../assets/images/SignUp.png';
import { Link, useNavigate } from 'react-router-dom';

function Signup({ error, handleCallBackResponse, setUser }) {
  const [errorLogin, setErrorLogin] = useState();
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
  const navigate = useNavigate();
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

  function handleSignUp() {
    if (checkError()) {
      return;
    }
    setUser({ name: 'asdf' });
    navigate('/');
  }

  function checkError() {
    let email = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;
    let confirmation = document.getElementById('confirmation-login').value;
    if (email === '') {
      setErrorLogin('Please enter username.');
      return true;
    }
    if (password === '') {
      setErrorLogin('Enter a password');
      return true;
    }
    if (confirmation === '') {
      setErrorLogin('Confirm your password');
      return true;
    }
    if (email.match(emailRegex) === null) {
      setErrorLogin('Invalid email.');
      return true;
    }
    if (password.match(passwordRegex) === null) {
      setErrorLogin(
        'Password must have minimum length of 8 and contain at least one letter and one number.'
      );
      return true;
    }
    if (password !== confirmation) {
      setErrorLogin('Those passwords didn’t match. Try again.');
      return true;
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
