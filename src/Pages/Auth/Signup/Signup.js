import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';


const Signup = () => {
	return (
    <div className="login-container">
			<h3>Sign up</h3>
			<div className="login-area">
        <div className="other-login">
					<SocialLogin></SocialLogin>
				</div>
				<form className="contact-form">
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
					<input className="tutor-btn" type="submit" value="Create account" />
				</form>
				<p><small>Already have an account?</small> <Link to="/login" className="signup">Log in</Link></p>
			</div>
		</div>
  );
};

export default Signup;