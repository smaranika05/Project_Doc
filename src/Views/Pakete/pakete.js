import React, { Component } from "react";
import Package from "./Package/Package";
import Package_one from "./Package_one/Package_one";
import Package_two from "./Package_two/Package_two";
import Card_part_one from "./Card_part_one/Card_part_one";
import Card_part_two from "./Card_part_two/Card_part_two";
import Package_contact from "./Package_contact/Package_contact";

import "./pakete.scss";
class App extends Component {
  render() {
    return (
      <div className="pakete">
        <div className="pakete_wrap">
          <div className="pakete_part1">
            <Package />
          </div>
          <div className="pakete_part2">
            <Package_one />
          </div>
          <div className="pakete_part3">
            <Package_two />
          </div>
          <div className="pakete_part4">
            <Card_part_one />
          </div>
          <div className="pakete_part5">
            <Card_part_two />
          </div>
          <div className="pakete_part6">
            <Package_contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
