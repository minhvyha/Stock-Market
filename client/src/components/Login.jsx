import React from 'react';
import SignInImage from '../assets/images/SignIn.png';
import SignUpImage from '../assets/images/SignUp.png';

function Login({ login, handleSignUp, handleSignIn, error }) {
  return (
    <div className="login-container" id="login-container">
      <img
        src={login ? SignInImage : SignUpImage}
        alt="Sign In Image"
        className="signin-image"
      />
      <div className="login-form-container">
        <h1 className="login-form-title">{login ? 'Sign In' : 'Sign Up'}</h1>
        <p>{error}</p>
        <div class="txt_field">
          <input type="text" id='username' />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" id='password' />
          <span></span>
          <label>Password</label>
        </div>
        {!login && (
          <div class="txt_field">
            <input type="password" id='confirmation' />
            <span></span>
            <label>Confirm Password</label>
          </div>
        )}
        <button className="submit-button">
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
