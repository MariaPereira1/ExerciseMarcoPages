import React, { useState } from "react";
import request from "../../api";
import "./styles.less";

const Register = ({ history }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setFormSubmit(true);
    if (!email || !name || !password) {
      return;
    }

    request
      .post("/users", {
        email,
        name,
        password
      })
      .then(() => {
        history.push("/login");
        alert("Successfully registered!");
      })
      .catch((error) => {
        if (!error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong!");
        }
      });
  };

  return (
    <div className="container-register">
      <h2 className="register-title">Create your account</h2>
      {error && <p>{error}</p>}
      <form className="register-form" onSubmit={handleFormSubmit}>
        <input
          type="email"
          className="register-input"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          className="register-input"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="password"
          className="register-input"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input
          type="submit"
          className="register-submit"
          value="Create"
          disabled={formSubmit && (!email || !name || !password)}
        />
      </form>
    </div>
  );
};

export default Register;
