import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BlogPage from "./Views/Blog_pages/blog_page";
import Kont from "./Views/Kontakt/kontakt";
import Refer from "./Views/Refer/refer";
import Blog from "./Views/Blog/blog";
import Home from "./Views/Homepage/homepage";
import Header from "./Components/Header/header";
import Pakt from "./Views/Pakete/pakete";
import Footer from "./Components/footer/footer";
import Impressum from "./Views/Impressum/impressum";
import PrivacyPolicy from "./Views/PrivacyPolicy/pp";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Referenzen" component={Refer} />
      <Route exact path="/Kontakt" component={Kont} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/Pakete" component={Pakt} />
      <Route exact path="/impressum" component={Impressum} />
      <Route exact path="/datenschutzerklaerung" component={PrivacyPolicy} />
      <Route exact path="/blog/:blogid" component={BlogPage} />
      <Footer />
    </Router>
  );
}

export default App;
