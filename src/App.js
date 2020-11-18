import React, { Component } from "react";

import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Root from "./Views/Root/root";
import Cardp from "./Views/Card/card";
// import Sec6 from "./Views/Sec6/sec6";
import Sec3 from "./Views/Sec3/sec3";
import Kont from "./Views/Kontakt/kontakt";
import Refer from "./Views/Refer/refer";
import Blog from "./Views/Blog/blog";
import Home from "./Views/Homepage/homepage";
import Header from "./Components/Header/header";
import Pakt from "./Views/Pakete/pakete";

import './App.css';


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
