import React, { useRef } from 'react';
import './Login-form.css';
import * as requestXXX from '../../my_modules/request/index.js';

const log = console.log;
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

function LoginForm() {
  let loginRef = useRef();
  let passwordRef = useRef();
  let showPasswordRef = useRef();
  let rememberMedRef = useRef();
  let submitButton = useRef();


  //!! just change password perfomance
  let showPassword = () => {
    if (showPasswordRef.current.checked) passwordRef.current.type = "text"
    else passwordRef.current.type = "password";
  };

  let getLogged = async (e) => {
    e.preventDefault();
    if (!loginRef.current.value || !passwordRef.current.value) alert("both fields must be filled");
    try {
       let authRequest = requestXXX({
        username: loginRef.current.value,
        pswd: passwordRef.current.value,
        rmb: rememberMedRef.current.checked
      })
      log(authRequest);

      const rawResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers,
        body: JSON.stringify({ authRequest })
      });

      const result = await rawResponse.json();
      if (result.error) alert('USER OR PASSWORD INCORRECT');
      else if (result.admin) window.location.replace('/pages/admin');
      else if (result.ok) window.location.replace('/pages/work');
    }
    catch (err) { log(err) };

  };
  return (
    <div className="LoginForm">
      <form>
        <input ref={loginRef} type="text" placeholder="Login" />
        <input ref={passwordRef} type="password" placeholder="Password" autoComplete="off" />
        <label> <input ref={showPasswordRef} type="checkbox" onClick={showPassword} /> show password </label>
        <label> <input ref={rememberMedRef} type="checkbox" /> remember me </label>
        <button ref={submitButton} onClick={getLogged} > Get connection </button>
      </form>
    </div>
  );
}

export default LoginForm;
