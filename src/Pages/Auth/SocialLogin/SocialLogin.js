import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
  
	return (
		<>
			<div className="social-logins">
				<button className="gadget-btn">
					<FontAwesomeIcon
						className="social-icon"
						icon={faGoogle}
					></FontAwesomeIcon>{" "}
					Login / Signup with Google
				</button>
        <div className="divider">
				  <hr />
				  <span>or use one of these options</span>
				  <hr />
			  </div>
			</div>
		</>
	);
};

export default SocialLogin;
