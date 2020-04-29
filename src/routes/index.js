import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

import Header from "../components/Header";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <main
      style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/gallery" component={Gallery} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
