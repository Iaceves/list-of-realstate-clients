import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ setLoggedIn }) {
  // const [users, setUsers] = useState([]);
  const navigate = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleName(e) {
    setEmail(e.target.value);
    // console.log(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    // console.log(e.target.value);
  }

  function loginRequest(e) {
    e.preventDefault();
    // console.log("inside of login request");

    fetch("/session", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.email === email) {
          window.sessionStorage.setItem("currentUserId", user.id);
          // console.log("successfully pass");
          setLoggedIn(true);
          navigate.push("/contracts");
        }
      });
    // console.log(users);
    // .then((r) => r.json())
    // .then if res is ok, get the res .id and set it on the window cookie
  }

  return (
    <div className="login_page">
      <div className="loginFormCss">
        <form onSubmit={loginRequest}>
          <label htmlFor="user" className="inputText">
            username:
          </label>
          <input
            className="userInputCss"
            type="text_field"
            placeholder="Enter email"
            id="email"
            name="email"
            onChange={handleName}
            required
          />
          <br />
          <label htmlFor="user" className="inputText">
            password:
          </label>
          <input
            className="passwordInputCss"
            type="text_field"
            placeholder="Enter password"
            id="password"
            name="password"
            onChange={handlePassword}
            required
          />
          <br />
          <button className="buttonCss">Login</button>
          <p className="forgotPasswordText">
            <a className="forgot password" href="/forgotPassword">
              Forgot password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
