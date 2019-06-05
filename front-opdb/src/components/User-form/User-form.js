import React, { useRef } from 'react';
import './User-form.css';
import { request } from '../../my_modules/request/index.js';
import Result from '../../my_modules/result/index.js';
import {log, headers, goTo} from '../../my_modules/stuff/index';

function UserForm(props) {
  let DepartmentRef = useRef();
  let loginRef = useRef();
  let passwordRef = useRef();
  let submitButton = useRef();

  let addUser = async (e) => {
    e.preventDefault();
    // if (!loginRef.current.value || !passwordRef.current.value) alert("both fields must be filled");
    // try {
    //   const authRequest = request({
    //     username: loginRef.current.value,
    //     pswd: passwordRef.current.value,
    //     rmb: rememberMedRef.current.checked
    //   });

    //   const fetchOptions = {
    //     method: 'POST',
    //     headers,
    //     body: JSON.stringify({ authRequest })
    //   };
    //   log(await new Result(fetch('/api/auth/login', fetchOptions)));
    //   (await new Result(fetch('/api/auth/login', fetchOptions)))
    //     .ok(_ => goTo(props, "/work"))
    //     .admin(_ => goTo(props, "/admin"))
    //     .error(r => log('ERROR', r))
    // }
    // catch (err) { log(err) };
  };
  return (
    <div className="UserForm">
      <form>
        <input ref={DepartmentRef} type="text" placeholder="Department" />
        <input ref={loginRef} type="text" placeholder="Login" />
        <input ref={passwordRef} type="password" placeholder="Password" autoComplete="off" />
        <button ref={submitButton} onClick={addUser} > Add User </button>
      </form>
    </div>
  );
}

export default UserForm;
