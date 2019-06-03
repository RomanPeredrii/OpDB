import React from 'react';
import './Login.css';
import LoginForm from '../../components/Login-form/Login-form';


function Login(props) {
  return (
    <div className="Login">
      <LoginForm history={props.history} />
    </div>
  );
}

export default Login;
