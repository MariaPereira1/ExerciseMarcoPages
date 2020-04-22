import React from "react";

const Login = () => {
  return (
    <form className="form">
      <input type="text" className="text-field" />
      <input type="password" className="text-field" />
      <input type="submit" className="submit-form" value="Login" />
    </form>
  );
};

export default Login;
