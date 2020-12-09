import React, { Component } from "react";
import { FaRocket } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Card from "@material-ui/core/Card";
// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Comp1 from "./../../../Assets/a-mock.webp";
import "./Cards.scss";
class Sec3 extends Component {
  render() {
    return (
      <div className="main_wrap">
        <div className="sec3_wrapper">
          {/* <h1><FaRocket ></FaRocket></h1> */}
          <div className="card_c">
            <div
              className="line1"
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <div className="card_section">
                <div className="li">
                  <ul>
                    <div className="icon_wrap">
                      <p className="icons">
                        <FaRocket />
                      </p>
                      <p>Wir optimieren</p>
                    </div>
                    <li>Analytische SEO-Maßnahmen</li>
                    <li>Endgerätdarstellung für eine responsive Website</li>
                    <li>Fachgebietspezifische Gestaltung</li>
                  </ul>
                </div>
              </div>
              <br></br>
              <div className="card_section">
                <div className="li">
                  <ul>
                    <div className="icon_wrap">
                      <p className="icons">
                        <FaPencilRuler />
                      </p>{" "}
                      <p>Wir designen</p>{" "}
                    </div>
                    <li>Modern und zeitgemäß</li>
                    <li>Hohe Individualität</li>
                    <li>User Experience optimiert</li>
                  </ul>
                </div>
              </div>
            </div>
            <br></br>
            <div
              className="line2"
              // data-aos="fade-left"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <div className="card_section">
                <div className="li">
                  <ul>
                    <div className="icon_wrap">
                      <p className="icons">
                        <FaLaptop />{" "}
                      </p>{" "}
                      <p>Wir pflegen</p>{" "}
                    </div>
                    <li>Regelmäßige Updates und Backups</li>
                    <li>Sicherheitschecks</li>
                    <li>Nachbetreuung</li>
                  </ul>
                </div>
              </div>
              <br></br>
              <div className="card_section">
                <div className="li">
                  <ul>
                    <div className="icon_wrap">
                      <p className="icons">
                        <BsArrowsAngleExpand />{" "}
                      </p>{" "}
                      <p>Wir skalieren</p>{" "}
                    </div>
                    <li>Zusätzliche Sprachen</li>
                    <li>Zusätzliche Inhalte und Menüpunkte</li>
                    <li>Zusätzliche Terminbuchungs-Formulare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec3;
