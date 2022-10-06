import React from 'react';
import SignUpImage from '../assets/images/SignUp.png';
import { Link } from 'react-router-dom';

function Signup({ handleSignUp, error, handleSignUp }) {
  return (
    <div className="login-container" id="login-container">
      <img
        src={SignUpImage}
        alt="Sign In Image"
        className="signin-image"
      />
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

        <button onClick={handleSubmit} className="submit-button">
           Sign Up
        </button>
        <div id="signInDiv"></div>
        <Link to="/signup">       
          <div class="signup_link">
            Joined us before? <a onClick={handleSignIn}>Login</a>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Signup;
