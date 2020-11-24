import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Root from "./Views/Homepage/Root/root";
import Cardp from "./Views/Homepage/Price_Card/Price_card";

import Sec3 from "./Views/Homepage/Cards/Cards";
import Kont from "./Views/Kontakt/kontakt";
import Refer from "./Views/Refer/refer";
import Blog from "./Views/Blog/blog";
import Home from "./Views/Homepage/homepage";
import Header from "./Components/Header/header";
import Pakt from "./Views/Pakete/pakete";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Referenzen" component={Refer} />
      <Route exact path="/Kontakt" component={Kont} />
      <Route exact path="/Blogs" component={Blog} />
      <Route exact path="/Pakete" component={Pakt} />
    </Router>
  );
}

export default App;
