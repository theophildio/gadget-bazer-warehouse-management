import React from "react";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login-container">
			<h3>Login</h3>
			<div className="login-area">
        <div className="other-login">
					<SocialLogin></SocialLogin>
				</div>
				<form className="contact-form">
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
					<input className="tutor-btn" type="submit" value="Log in" />
				</form>
				<p>
					<small>
						No account?{" "}
						<Link
							to="/signup"
							className="signup"
						>
							Signup
						</Link>
					</small>
				</p>
				{/* Reset Password */}
				<p>
					<small>
						Forget Password?{" "}
						<button
							className="signup"
						>
							Reset Password
						</button>
					</small>
				</p>
			</div>
		</div>
	);
};

export default Login;
