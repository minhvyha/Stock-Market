import React, { useContext, useEffect, useState } from 'react';
import SignUpImage from '../../assets/images/SignUp.png';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './Login.css';
import NavIntro from '../../components/NavIntro';
import useWindowDimensions from '../../components/useWindowDimensions';
import { MainPageContext } from '../../App';

function Signup({ setUser }) {
  const { user } = useContext(MainPageContext);
  const [errorLogin, setErrorLogin] = useState();
  const { width } = useWindowDimensions();
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length !== 0 && user.constructor === Object) {
      navigate('/');
    }
  }, []);

  async function signupHandleCallBackResponse(response) {
    let userObject = jwt_decode(response.credential);
    var baseUrl = `https://futuris.cyclic.app/addUser/${process.env.REACT_APP_DATABASE_KEY}/`;
    let result = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userObject.name.toLowerCase(),
        email: userObject.email,
        password: 'google',
      }),
    });
    let user = await result.json();
    console.log(user);
    setUser(user);
    navigate('/');
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: signupHandleCallBackResponse,
    });
    let buttonWidth = 300;
    if (width < 350) {
      buttonWidth = 220;
    } else if (width > 827 && width < 992) {
      buttonWidth = 240;
    }
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
      width: buttonWidth,
      logo_alignment: 'center',
      text: 'continue_with',
    });
    google.accounts.id.prompt();
  }, []);

  async function handleSignUp() {
    if (checkError()) {
      return;
    }
    let email = document.getElementById('email-login').value.toLowerCase();
    let password = document.getElementById('password-login').value;
    var baseUrl = `https://futuris.cyclic.app/addUser/${process.env.REACT_APP_DATABASE_KEY}/`;
    let result = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'User',
        email: email,
        password: password,
      }),
    });
    setUser(result);
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
      <NavIntro activePage={'signup'} />

      <img src={SignUpImage} alt="Sign In Image" className="signin-image" />
      <div className="login-form-container">
        <h1 className="login-form-title">Sign Up</h1>
        {errorLogin && <p className="error-text-form">{errorLogin}</p>}
        <div className="txt_field">
          <input type="text" id="email-login" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" id="password-login" required />
          <span></span>
          <label>Password</label>
        </div>

        <div className="txt_field">
          <input type="password" id="confirmation-login" required />
          <span></span>
          <label>Confirm Password</label>
        </div>

        <button onClick={handleSignUp} className="submit-button">
          Sign Up
        </button>
        <div id="signInDiv"></div>

        <div className="signup_link">
          Joined us before? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
