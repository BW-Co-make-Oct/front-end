import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const blankData = {
  username: "",
  password: "",
};
const errorStrings = {
  username: "",
  password: "",
};

function Login() {
  const [userData, setUserData] = useState(blankData);
  const [formErrors, setFormErrors] = useState(errorStrings);

  const history = useHistory();

  const change = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("auth/login", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserData(blankData);
      });
  };

  return (
    <>
      <div className="formBG">
        <div className="loginBox">
          <div className="mainForm">
            <h2>Login</h2>
            <form onSubmit={submit}>
              <div className="item">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userData.username}
                  onChange={change}
                />
              </div>
              <p className="errorMsg">{formErrors.username}</p>
              <div className="item">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={change}
                />
              </div>
              <p className="errorMsg">{formErrors.password}</p>
              <div className="itemSub">
                <button className="loginBut">Login</button>
                <Link to="/register" className="loginBut">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
