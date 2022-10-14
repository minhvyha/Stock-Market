import React, { useEffect, useState } from 'react';
import SignInImage from '../../assets/images/SignIn.png';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function Login({ setUser }) {
	const [errorLogin, setErrorLogin] = useState();
	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

	const navigate = useNavigate();

	function handleCallBackResponse(response) {
		let userObject = jwt_decode(response.credential);
		console.log(userObject);
		setUser(userObject);
		navigate('/');
	}

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

	function handleSignIn() {
		if (checkError()) {
			return;
		}
		setUser({ name: 'asdf' });
		navigate('/');
	}

	function checkError() {
		let email = document.getElementById('email-login').value;
		let password = document.getElementById('password-login').value;
		if (email === '') {
			setErrorLogin('Please enter username.');
			return true;
		}
		if (password === '') {
			setErrorLogin('Please enter password.');
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
	}

	return (
		<div className="login-container" id="login-container">
			<img src={SignInImage} alt="Sign In Image" className="signin-image" />
			<div className="login-form-container">
				<h1 className="login-form-title">Sign In</h1>
				{errorLogin && <p className="error-text-form">{errorLogin}</p>}
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
				<Link to="/signup">
					<div class="signup_link">
						Not a member? <a>Register</a>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Login;
