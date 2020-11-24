import React, { Component } from "react";
import Doc from "./../../../Assets/Doc.png";
import one from "./../../../Assets/one.png";
import two from "./../../../Assets/two.png";

// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./root.scss";
class Root extends Component {
  render() {
    return (
      <div className="root_container">
        <div
          className="left_content"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="content">
            <h1>Digitalisieren Sie Iher Praxis</h1>
            <p>Professionelle Webseiten für Ärzte und Zahnärzte</p>
            <div className="listing">
              <ul>
                <li>Homepage für Ärzte</li>
                <li>Finden lassen und direkt online informieren!</li>
                <li>
                  Zunehmend viele Menschen suchen Ihren Arzt im Internet
                  –Profitieren Sie von unserer Erfahrung und digitalisieren Sie
                  Ihre Praxis!
                </li>
              </ul>
            </div>
            <div id="outer">
              <div class="inner">
                <button type="submit" class="Btn1" href="#">
                  Zu unserem Angebot
                </button>
              </div>
              <div class="inner">
                <button type="submit" class="Btn2" href="#">
                  Referenzen
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right_content">
          {/* <div className="root_img"> */}
          <img src={Doc} alt="praxis" className="main"></img>
          {/* <img src={one} alt="one" className="one"></img>
            <img src={two} alt="two" className="two"></img> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Root;
