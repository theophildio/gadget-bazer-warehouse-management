import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorGoogleMsg;

  // Error msg for Google
  if (error) {
    errorGoogleMsg = <div>
        <p style={{color: 'crimson', margitBottom: '10px'}}>Error: {error.message}</p>
      </div>
  }

  // Google user
  if(user) {
    navigate('/inventory');
  }
  
	return (
		<>
			<div className="social-logins">
				<button onClick={() => signInWithGoogle()} className="gadget-btn">
					<FontAwesomeIcon
						className="social-icon"
						icon={faGoogle}
					></FontAwesomeIcon>{" "}
					Login / Signup with Google
				</button>
				{errorGoogleMsg}
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
