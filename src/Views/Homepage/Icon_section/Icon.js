import React, { Component } from "react";
import { HiLightBulb } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import Comp2 from "./../../../Assets/b-mock.png";

// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./Icon.scss";
class Icon extends Component {
  render() {
    return (
      <div className="icons_wrap">
        <div className="icon_sec">
          <h2>Ihr Weg zur perfekten Doctor-Website</h2>
          <h3>Wie läuft die Erstellung der Praxishomepage ab?</h3>
          <div className="icons1">
            <div className="icons1_flex">
              <p className="icons">
                <HiLightBulb />
              </p>
              <p>Definieren der Projektanforderungen</p>
            </div>
            {/* <svg>
              <defs>
                <marker
                  id="m"
                  markerWidth="4"
                  markerHeight="8"
                  refX="0"
                  refY="1"
                  viewBox="0 0 1 2"
                >
                  <polygon points="0,0 1,1 0,2" fill="black" />
                </marker>
              </defs>
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke-width="2"
                marker-end="url(#m)"
                stroke="black"
              />
            </svg> */}
            <div className="icons1_flex">
              <p className="icons">
                <MdMessage />
              </p>
              <p>Content-Erstellung (Bilder, Texte)</p>
            </div>
            <div className="icons1_flex">
              <p className="icons">
                <FaLaptopCode />
              </p>
              <p>Programmierung und Implementierung</p>{" "}
            </div>
          </div>
          <div className="icons2" style={{ justifyContent: "space-evenly" }}>
            <div className="icons1_flex">
              <p className="icons">
                <BsGraphUp />
              </p>
              <p>Suchmaschinen-Perfektionierung</p>
            </div>
            <div className="icons1_flex">
              <p className="icons">
                <BsReverseLayoutTextWindowReverse />
              </p>
              <p>Rechtstext-Erstellung (Datenschutzrichtlinien, AGBs)</p>{" "}
            </div>
          </div>
          <h3>
            Wir bevorzugen den persönlichen Kontakt – aber auch per E-Mail und
            klar definierter Erwartungen können wir die Homepage Ihrer
            Arztpraxis umsetzen.{" "}
          </h3>
        </div>
      </div>
    );
  }
}

export default Icon;
