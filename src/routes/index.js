import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "../../src/components/PrivateRoute";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "../components/Header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <main
      style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%"
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
