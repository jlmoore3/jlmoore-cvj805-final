import React from "react";
import UsersContext from "../context/UsersContext";
import { useState } from "react";

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    fName: "",
    lName: "",
    email: "",
  });

  const submitForm = (e) => {
    // e.preventDefault();

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(`Successfully created new user: ${user.username}`);
        res.redirect("/dashboard");
      })
      .catch((err) => console.log(`Error: ${err}`));
  };
  return (
    <div className="login-wrapper">
      <form>
        <div className="col-sm">
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={(event) => {
                setUser({ ...user, username: event.target.value });
              }}
            />
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="password">
            <input
              name="password"
              value={user.password}
              type="password"
              required
              placeholder="Password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="fName">
            <input
              value={user.fName}
              name="fName"
              type="text"
              required
              placeholder="First Name"
              onChange={(event) => {
                setUser({ ...user, fName: event.target.value });
              }}
            />
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="Surame">
            <input
              value={user.lName}
              type="text"
              required
              placeholder="Surname"
              onChange={(event) => {
                setUser({ ...user, lName: event.target.value });
              }}
            />
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="Email">
            <input
              value={user.email}
              type="text"
              required
              placeholder="Email"
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
            />
          </label>
        </div>
        <div className="col-sm">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={submitForm}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
