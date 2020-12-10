import React, { Component } from "react";
import Package from "./Package/Package";
import Packageone from "./Package_one/Package_one";
import Packagetwo from "./Package_two/Package_two";
// import Contactus from "./Contact_us_form/Contact_us";
import Packagecontact from "./Package_contact/Package_contact";
import Mail from "./Mail";
import { env } from "./../../config";
import "./pakete.scss";

class Pakete extends Component {
  // constructor() {
  //   super();
  //   this.state = {s
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
            <Packageone />
          </div>
          <div className="pakete_part3">
            <Packagetwo />
          </div>
          <div className="pakete_part4">
            <Mail env={env} />
          </div>
          <div className="pakete_part6">
            <Packagecontact />
          </div>
        </div>
      </div>
    );
  }
}

export default Pakete;
