import React, { useState } from "react";
import { AuthRequests } from "../../lib/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";
import { authActions } from "../../store/auth";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const actionButton = async (e) => {
    e.preventDefault();
    const result = await AuthRequests.logIn(credentials);

    console.log(result);
    if (result.status === "fail") {
      return;
    }

    dispatch(authActions.setLogin(result.token));
    // setTimeout(() => {
    // }, 2000);
    navigate({ pathname: "/" }, { replace: true });
  };
  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <h2>Login</h2>
        <form className={classes.form}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={credentials.email}
              onChange={changeInputHandler}
              placeholder="jhon@doe.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={changeInputHandler}
              placeholder="***********"
              required
            />
          </div>
          <button onClick={actionButton} className={classes.btn}>
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
