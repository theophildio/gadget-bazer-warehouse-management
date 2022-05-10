import React, { useRef } from "react";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const emailRef = useRef('')
	const [signInWithEmailAndPassword, user, error] =
		useSignInWithEmailAndPassword(auth);
	const [sendPasswordResetEmail, sending] =
		useSendPasswordResetEmail(auth);
	const navigate = useNavigate();
	const location = useLocation();

	let errormsg;

	if (error) {
		errormsg = (
			<div>
				<p style={{ color: "crimson", margitBottom: "10px" }}>
					Error: {error.message}
				</p>
			</div>
		);
	}

	let from = location.state?.from?.pathname || "/";

	if (user) {
		navigate(from, { replace: true });
	}

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		signInWithEmailAndPassword(email, password);
	};

	const navigateToRegister = () => {
		navigate("/signup");
	};

	const handleResetPass = async () => {
		const email = emailRef.current.value;
        if (!email) {
            toast('Enter your email please');
        } else {
            await sendPasswordResetEmail(email)
            toast('Password Reset link sent to email');
        }

    }

	return (
		<div className="login-container">
			<h3>Login</h3>
			<div className="login-area">
				<div className="other-login">
					<SocialLogin></SocialLogin>
				</div>
				<form onSubmit={handleLogin} className="auth-form">
					<input
						ref={emailRef}
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
					<input className="gadget-btn" type="submit" value="Log in" />
				</form>
				{errormsg}
				<p>
					<small>
						No account?{" "}
						<Link onClick={navigateToRegister} to="/signup" className="signup">
							Sign up
						</Link>
					</small>
				</p>
				
				<p>
					<small>
						Forget Password?{" "}
						<button
							onClick={handleResetPass}
							className="signup"
						>
							Reset Password
						</button>
						<ToastContainer></ToastContainer>
					</small>
				</p>
			</div>
		</div>
	);
};

export default Login;
