import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import { PostContext } from "../contexts/PostContext";
import { addUser } from "../Actions";

const blankData = {
  username: "",
  password: "",
};
const errorStrings = {
  username: "",
  password: "",
};

export default function Register() {
  const [userData, setUserData] = useState(blankData);
  const [formErrors, setFormErrors] = useState(errorStrings);
  const { dispatch } = useContext(PostContext);

  const history = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.user);
        // addUser(dispatch, res.data.user);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setUserData(blankData);
      });
  };

  //   const validate = (name, value) => {
  //     yup
  //       .reach(schema, name)
  //       .validate(value)
  //       .then((valid) => {
  //         setFormErrors({
  //           ...formErrors,
  //           [name]: "",
  //         });
  //       })

  //       .catch((err) => {
  //         setFormErrors({
  //           ...formErrors,
  //           [name]: err.errors[0],
  //         });
  //       });
  //   };
  //   useEffect(() => {
  //     schema.isValid(userData).then((valid) => {
  //       setDisabled(!valid);
  //     });
  //   }, [userData]);

  return (
    <>
      <div className="formBG">
        <div className="loginBox">
          <div className="mainForm">
            <h2>Sign up!</h2>
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={change}
                />
              </div>
              <p className="errorMsg">{formErrors.role}</p>
              <div className="itemSub">
                <button id="subutton">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
