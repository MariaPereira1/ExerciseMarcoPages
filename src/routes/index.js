import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";

import Header from "../components/Header";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
        <Route path="/login" component={Login} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/gallery" component={Gallery} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
