import React, { Component } from "react";
import Root from "./../../Views/Root/root";
import Card from "./../../Views/Card/card";
import Sec3 from "./../../Views/Sec3/sec3";
import Sec6 from "./../../Views/Sec6/sec6";
import "./homepage.scss";
class App extends Component {
  render() {
    return (
      <div className="home_wrap">
        <div className="part1">
          <Root />
        </div>
        <div className="part2">
          <Card />
        </div>
        <div className="part3">
          <Sec3 />
        </div>
        <div className="part4">
          <Sec6 />
        </div>
      </div>
    );
  }
}

export default App;
