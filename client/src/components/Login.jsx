import React from 'react';
import SignInImage from '../assets/images/SignIn.png';
import { Link } from 'react-router-dom';

function Login({ error, handleSignIn }) {
  return (
    <div className="login-container" id="login-container">
      <img
        src={SignInImage}
        alt="Sign In Image"
        className="signin-image"
      />
      <div className="login-form-container">
        <h1 className="login-form-title">Sign In</h1>
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
        <button onClick={handleSignIn} className="submit-button">
          Sign In
        </button>
        <div id="signInDiv"></div>
        <Link to="signup">
          <div class="signup_link">
            Not a member? <a>Register</a>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Login;
