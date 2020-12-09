import React, { Component } from "react";

import Comp2 from "./../../../Assets/b-mock.webp";

// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./sec5.scss";
class Sec5 extends Component {
  render() {
    return (
      <div className="sec5_wrap">
        <div className="wrap_sec5">
          <div className="gradient_text">
            <div
              className="five_lhs"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3 style={{ fontWeight: "500" }}>
                Die perfekte und optimierte Webseite für Ihre Arztpraxis
              </h3>
              <p>
                Verschwenden Sie ihre wertvolle Zeit nicht mit dem Bau oder
                Umbau von Webseiten – wir übernehmen das gerne für Sie!
              </p>
              <p>
                Dank unseres klar definierten Projektablaufs wissen Sie zu jedem
                Zeitpunkt, wie es um Ihre Webseite steht. Sie haben jederzeit
                die Möglichkeit Feedback zu geben. Wir sind für Sie dann und
                übernehmen die komplette Projektausführung für Sie.
              </p>
            </div>
          </div>
          <div className="five_rhs">
            <div
              className="gradient"
              data-aos="fade-left"
              //data-aos-offset="300"
              data-aos-duration="1500"
              //data-aos-easing="ease-in-sine"
            ></div>
            <div className="grad_img">
              <img src={Comp2} alt="computer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec5;
