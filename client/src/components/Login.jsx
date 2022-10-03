import React from 'react';
import SignInImage from '../assets/images/SignIn.png';
import SignUpImage from '../assets/images/SignUp.png';

function Login({ login, handleSignUp, handleSignIn, error, handleSubmit }) {
  return (
    <div className="login-container" id="login-container">
      <img
        src={login ? SignInImage : SignUpImage}
        alt="Sign In Image"
        className="signin-image"
      />
      <div className="login-form-container">
        <h1 className="login-form-title">{login ? 'Sign In' : 'Sign Up'}</h1>
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
        {!login && (
          <div class="txt_field">
            <input type="password" id="confirmation-login" required />
            <span></span>
            <label>Confirm Password</label>
          </div>
        )}
        <button onClick={handleSubmit} className="submit-button">
          {login ? 'Sign In' : 'Sign Up'}
        </button>
        <div id="signInDiv"></div>
        {login ? (
          <div class="signup_link">
            Not a member? <a onClick={handleSignUp}>Register</a>
          </div>
        ) : (
          <div class="signup_link">
            Joined us before? <a onClick={handleSignIn}>Login</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
