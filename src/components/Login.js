import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  // How can we log in? What do we need to do?
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", login)
      .then((res) => {
        console.log(res, "res inside handlePostSubmit axios");
        window.localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        console.log(err, "error in handleSubmit axios");
      });
    setLogin({ username: "", password: "" });
  };

  return (
    <div>
      <h1>Welcome to the Safari App LOGIN!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          label="username"
          //   value={}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="password"
          label="password"
          //   value={}
          onChange={handleChange}
          className="input"
        />
        <button>LOGIN</button>
      </form>
    </div>
  );
}
