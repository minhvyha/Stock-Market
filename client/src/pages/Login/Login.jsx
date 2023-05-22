import React, { useEffect, useState } from 'react';
import SignInImage from '../../assets/images/SignIn.png';
import NavIntro from "../../components/NavIntro";
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './Login.css';
import { useContext } from 'react';
import useWindowDimensions from '../../components/useWindowDimensions';
import { MainPageContext } from '../../App';
import Loading from '../../components/Loading'

function Login({ setUser }) {

	const {user} = useContext(MainPageContext)
	const [errorLogin, setErrorLogin] = useState();
	const { width } = useWindowDimensions();
	const [loading, setLoading] = useState(false)

	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

	const navigate = useNavigate();

	useEffect(() =>{
		if(Object.keys(user).length !== 0 && user.constructor === Object){
			navigate('/')
		}
	}, [])

	
	async function loginHandleCallBackResponse(response) {
		setLoading(true)
		let userObject = jwt_decode(response.credential);
		var baseUrl = `https://futuris.cyclic.app/${process.env.REACT_APP_DATABASE_KEY}/${userObject.email}`
		const fetchResult = await fetch(baseUrl)
		const result = await fetchResult.json()
		if ( result === null){
			setErrorLogin('No account found.')
			setLoading(false)
			return
		}
		setUser(result);
		setLoading(false)
		navigate('/');
	}

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: process.env.REACT_APP_CLIENT_ID,
			callback: loginHandleCallBackResponse,
		});
		let buttonWidth = 300;
		if (width < 350) {
			buttonWidth = 220;
		} else if (width > 827 && width < 992) {
			buttonWidth = 240;
		}
		let signInDiv = document.getElementById("signInDiv")
		google.accounts.id.renderButton(signInDiv, {
			type: 'standard',
			theme: 'outline',
			size: 'large',
			width: buttonWidth,
			text: 'signin_with',
			logo_alignment: 'center',
		});
	}, []);

	async function handleSignIn() {
		if (checkError()) {
			return;
		}
		let email = document.getElementById('email-login').value;
		let password = document.getElementById('password-login').value;
		var baseUrl = `https://futuris.cyclic.app/${process.env.REACT_APP_DATABASE_KEY}/${email}/${password}`
		const fetchResult = await fetch(baseUrl)
		const result = await fetchResult.json()
		if ( result === null){
			setErrorLogin('No account found.')
			setLoading(false)
			return
		}
		setUser(result);
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
			{loading && <Loading />}
      <NavIntro activePage={'login'} />

			<img src={SignInImage} alt="Sign In Image" className="signin-image" />
			<div className="login-form-container">
				<h1 className="login-form-title">Sign In</h1>
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
				<button onClick={handleSignIn} className="submit-button">
					Sign In
				</button>
				<div id="signInDiv"></div>

				<div className="signup_link">
					Not a member? <Link to="/signup">Register</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
