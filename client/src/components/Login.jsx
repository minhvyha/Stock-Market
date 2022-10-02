import React from 'react'
import SignInImage from '../assets/images/SignIn.png';

function Login({login}) {
  return (
    <div className="login-container" id="login-container">
        <img src={SignInImage} alt="Sign In Image" className="signin-image" />
        <div className="login-form-container">
          <h1 className="login-form-title">{login ? 'Sign In' : 'Sign Up'}</h1>
          <form>
              <div className=''></div>
          </form>
          <div id="signInDiv"></div>
        </div>
      </div>
  )
}

export default Login