import React from 'react'
import SignInImage from '../assets/images/SignIn.png';

function Login({login}) {
  return (
    <div className="login-container" id="login-container">
        <img src={SignInImage} alt="Sign In Image" className="signin-image" />
        <div className="login-form-container">
          <h1 className="login-form-title">{login ? 'Sign In' : 'Sign Up'}</h1>
          <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <button className='submit-button'>{login ? "Sign In" : "Sign Up"}</button>
        <div class="signup_link">
          Not a member? <a href="#">Signup</a>
          <div id="signInDiv"></div>
        </div>
      </div>
    </div>
  )
}

export default Login