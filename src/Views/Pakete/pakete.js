import React, { Component } from "react";
import Package from "./Package/Package";
import Package_one from "./Package_one/Package_one";
import Package_two from "./Package_two/Package_two";
import Contact_us from "./Contact_us_form/Contact_us";
import Package_contact from "./Package_contact/Package_contact";

import "./pakete.scss";
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     radio: "",
  //   };
  // }
  // formChild1(params) {
  //   this.setState({
  //     radio: params,
  //   });
  // }

  // formchild(event) {
  //   const field = event.target.id;
  //   if (field === "radio") {
  //     this.setState({ radio: event.target.value });
  //   }
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
            <Contact_us />
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
