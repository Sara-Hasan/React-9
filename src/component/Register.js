import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setnameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  // const validEmail = new RegExp(
  //   "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  // );
  // const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const storeUser = (e) => {
    e.preventDefault();
    if (email === "" && password === "" && name === "") {
      setEmailErr(true);
      setPwdError(true);
      setnameErr(true);
    } else {
      const users = JSON.parse(localStorage.getItem("users"));
      if (!users) {
        localStorage.setItem(
          "users",
          JSON.stringify([
            { username: name, useremail: email, userpassword: password },
          ])
        );
        alert("success1");
        window.location.assign("/post");
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([
            ...users,
            { username: name, useremail: email, userpassword: password },
          ])
        );
        alert("success2");
        window.location.assign("/comment");
      }
    }
  };
  return (
    <div>
      <div className="container">
        <form className="ui form bg" onSubmit={storeUser}>
          <h2> Register </h2>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
            {nameErr && <p style={{ color: "red" }}>It must not be empty</p>}
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="joe@schmoe.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p style={{ color: "red" }}>It must not be empty</p>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {pwdError && <p style={{ color: "red" }}>It must not be empty</p>}
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
