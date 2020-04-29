import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUserAction, detailsUserAction } from "../../store/user/actions";
import request from "../../api";
import "./styles.less";

const Login = ({ loginUser, detailsUser, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!email && !password) {
      return;
    }

    request
      .post("/users/login", {
        email,
        password
      })
      .then((response) => {
        const token = response.data.token || "";

        if (token) {
          request
            .get("/users/me", {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then((response) => {
              const { email, name } = response.data;

              sessionStorage.setItem("token", token);

              detailsUser(email, name);
              loginUser();

              history.push("/about");
            });
        }
      });

    // loginUser(email);
    // history.push("/");
  };

  return (
    <section className="container-login">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <input
          type="email"
          className="login-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="submit" className="login-submit" value="Login" />
      </form>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: () => dispatch(loginUserAction()),
  detailsUser: (email, name) => dispatch(detailsUserAction(email, name))
});

export default connect(undefined, mapDispatchToProps)(Login);
