import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
	const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
	const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate('/login');
	}

	if(user) {
		console.log("Updated Profile");
	}

	const handleSignUp = async (e) => {
		e.preventDefault();
		toast('Check your email to verify');
		const displayName = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName });
		navigate('/inventory');
	}

	return (
    <div className="login-container">
			<h3>Sign up</h3>
			<div className="login-area">
        <div className="other-login">
					<SocialLogin></SocialLogin>
				</div>
				<form onSubmit={handleSignUp} className="auth-form">
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						required
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Your password"
						required
					/>
					<input className="gadget-btn" type="submit" value="Create account" />
					<ToastContainer></ToastContainer>
				</form>
				<p><small>Already have an account?</small> <Link onClick={navigateToLogin} to="/login" className="signup">Log in</Link></p>
			</div>
		</div>
  );
};

export default Signup;