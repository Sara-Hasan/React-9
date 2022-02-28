import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  // const [user, setUser] = useState();
  // // if there's a user show the message below
  // if (user) {
  //   return <div>{user.name} is loggged in</div>;
  // }
  const storeUser = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.filter((ele) => {
      return ele.useremail === email;
    })[0];
    if (email === "" && password === "") {
      setEmailErr(true);
      setPwdError(true);
    } else if (email === user.useremail && password === user.userpassword) {
      alert("you have successfully logged-in ");
      window.location.assign("/post");
    } else {
      alert("please make sure the username/email/password are correct ");
    }
  };
  return (
    <div>
      <div className="container">
        <form className="ui form bg" onSubmit={storeUser}>
          <h2> Login </h2>
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
export default Login;
