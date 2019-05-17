import React from 'react';
import './Login.css';

function Login() {
    
  return (
    <div className="Login">
      <form>
          <input type="text" placeholder="Login"/>
          <input type="password" placeholder="Password" />
          <label> <input name="showPswd" type="checkbox" /> show password </label> 
          <label> <input name="rememberMe" type="checkbox" /> remember me </label>          
          <button> Get connection </button>
      </form>
    </div>
  );
}

export default Login;
