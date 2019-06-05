import React, { useRef } from 'react';
import './Login-form.css';
import { request } from '../../my_modules/request/index.js';
import Result from '../../my_modules/result/index.js';
import {log, headers, goTo} from '../../my_modules/stuff/index';

function LoginForm(props) {
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
      const authRequest = request({
        username: loginRef.current.value,
        pswd: passwordRef.current.value,
        rmb: rememberMedRef.current.checked
      });

      const fetchOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({ authRequest })
      };

      (await new Result(fetch('/api/auth/login', fetchOptions)))
        .ok(_ => goTo(props, "/work"))
        .admin(_ => goTo(props, "/admin"))
        .error(r => log('ERROR', r))
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
