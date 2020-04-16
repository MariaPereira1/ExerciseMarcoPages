import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Header from "../components/Header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
