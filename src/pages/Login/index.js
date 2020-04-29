import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUserAction } from "../../store/user/actions";
import "./styles.less";

const validUsername = "user";
const validPassword = "123";

const Login = ({ loginUser, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!username && !password) {
      return;
    }

    if (username === validUsername && password === validPassword) {
      // Login user
      loginUser(username);
      history.push("/");
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="text-field"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        className="text-field"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <input type="submit" className="submit-form" value="Login" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username) => dispatch(loginUserAction(username))
});

export default connect(undefined, mapDispatchToProps)(Login);
