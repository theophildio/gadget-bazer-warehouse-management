import React from 'react';
import {useAuthState, useSendEmailVerification} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Common/LoadingSpinner/LoadingSpinner';

const RequireAuth = ({children}) => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if(loading) {
    return <Loading></Loading>
  }
  if(!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(!user.emailVerified) {
    return <div style={{textAlign: 'center'}}>
      <h3>Please verified your email</h3>
      <button className='gadget-btn'
        onClick={async () => {
          await sendEmailVerification(auth);
          toast('Sent email');
        }}
      >
        Send Verification email again
      </button>
      <ToastContainer></ToastContainer>
    </div>
  }
  return children;
};

export default RequireAuth;