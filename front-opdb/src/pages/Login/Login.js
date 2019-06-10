import React from 'react';
import './Login.css';
import LoginForm from '../../components/Login-form/Login-form';
import Footer from '../../components/Footer/Footer';


function Login(props) {
  return (

    <div className="Login">
      <main>
        <LoginForm history={props.history} />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
