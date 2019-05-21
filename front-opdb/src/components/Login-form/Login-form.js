import React, { useRef } from 'react';
import './Login-form.css';
import { request } from 'http';

const log = console.log;

function LoginForm() {
  let loginRef = useRef();
  let passwordRef = useRef();
  let showPasswordRef = useRef();
  let rememberMedRef = useRef();
  let submitButton = useRef();

  let activateSubmitButton = () => {

  };
  //!! just change password perfomance
  let showPassword = () => {
    if (showPasswordRef.current.checked) passwordRef.current.type = "text"
    else passwordRef.current.type = "password";
  };

  let getLogged = (e) => {
    e.preventDefault();
    let request = {
      username: loginRef.current.value,
      pswd: passwordRef.current.value,
      rmb: rememberMedRef.current.checked
    }
    log(request);
  };
  return (
    <div className="LoginForm">
      <form>
        <input ref={loginRef} type="text" placeholder="Login" />
        <input ref={passwordRef} onChange={activateSubmitButton} type="password" placeholder="Password" autoComplete="off" />
        <label> <input ref={showPasswordRef} type="checkbox" onClick={showPassword} /> show password </label>
        <label> <input ref={rememberMedRef} type="checkbox" /> remember me </label>
        <button ref={submitButton} onClick={getLogged}> Get connection </button>
      </form>
    </div>
  );
}

export default LoginForm;
