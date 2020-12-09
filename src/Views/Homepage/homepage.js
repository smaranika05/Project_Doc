import React, { Component } from "react";
import Root from "./Root/root";
import Price_Card from "./Price_Card/Price_card";
import Cards from "./Cards/Cards";
import Sec4 from "./Sec4/Sec4";
import Sec5 from "./Sec5/sec5";
import Icon from "./Icon_section/Icon";
import Contact_home from "./Contact_home/Contact_home";
import "./homepage.scss";
class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
        <div className="home_wrap">
          <div className="part1">
            <Root />
          </div>
          <div className="part2">
            <Price_Card />
          </div>
          <div className="part3">
            <Cards />
          </div>
          <div className="part4">
            <Sec4 />
          </div>
          <div className="part5">
            <Sec5 />
          </div>
          <div className="part6">
            <Icon />
          </div>
          <div className="part7">
            <Contact_home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
