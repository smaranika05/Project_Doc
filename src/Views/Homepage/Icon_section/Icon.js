import React, { Component } from "react";
import { HiLightBulb } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import Comp2 from "./../../../Assets/b-mock.webp";
import Svg_right from "./svg_right";
import Svg_left from "./svg_left";
import Svg_curve from "./svg_curve";

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
            <div className="arrows">
              <Svg_right />
            </div>
            <div className="icons1_flex">
              <p className="icons">
                <MdMessage />
              </p>
              <p>Content-Erstellung (Bilder, Texte)</p>
            </div>
            <div className="arrows">
              {" "}
              <Svg_right />
            </div>
            <div className="icons1_flex">
              <p className="icons">
                <FaLaptopCode />
              </p>
              <p>Programmierung und Implementierung</p>{" "}
            </div>
          </div>

          <div className="icons2">
            <div className="icons1_flex">
              <p className="icons">
                <BsGraphUp />
              </p>
              <p>Suchmaschinen-Perfektionierung</p>
            </div>
            <div className="arrows">
              <Svg_left />
            </div>
            <div className="icons1_flex">
              <p className="icons">
                <BsReverseLayoutTextWindowReverse />
              </p>
              <p>Rechtstext-Erstellung (Datenschutzrichtlinien, AGBs)</p>{" "}
            </div>
            <div className="curve">
              <Svg_curve />
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
