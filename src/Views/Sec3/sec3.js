import React, { Component } from "react";
import { FaRocket } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Card from "@material-ui/core/Card";
// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Comp1 from "./../../Assets/a-mock.png";
import "./sec3.scss";
class Sec3 extends Component {
  render() {
    return (
      <div className="main_wrap">
        <div className="sec3_wrapper">
          {/* <h1><FaRocket ></FaRocket></h1> */}
          <div className="card_c">
            <div className="line1">
              <Card
                style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginRight: "100px",
                }}
              >
                <div className="li">
                  <ul>
                    <p>
                      Wir optimieren
                      <FaRocket style={{ color: "#E8505B" }} />
                    </p>
                    <li>Suchmaschinenoptimiert</li>
                    <li>Endgerät-optimiert</li>
                    <li>Spezifisch für Ihr Fachgebiet</li>
                  </ul>
                </div>
              </Card>
              <br></br>
              <Card
                style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                }}
              >
                <div className="li">
                  <ul>
                    <p>
                      Wir designen
                      <FaPencilRuler style={{ color: "#E8505B" }} />
                    </p>
                    <li>Frisches und modernes Design</li>
                    <li>Hohe Individualität</li>
                    <li>User-experience optimiert</li>
                  </ul>
                </div>
              </Card>
            </div>
            <br></br>
            <div className="line2">
              <Card
                style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginRight: "100px",
                }}
              >
                <div className="li">
                  <ul>
                    <p>
                      Wir pflegen
                      <FaLaptop style={{ color: "#E8505B" }} />
                    </p>
                    <li>Regelmäßige Updates und Backups</li>
                    <li>Oder pflegen Sie selbst</li>
                  </ul>
                </div>
              </Card>
              <Card
                style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                }}
              >
                <div className="li">
                  <ul>
                    <p>
                      Wir skalieren
                      <BsArrowsAngleExpand style={{ color: "#E8505B" }} />
                    </p>
                    <li>Zusätzliche Sprachen</li>
                    <li>Zusätzliche Inhalte und Menüpunktet</li>
                    <li>Zusätzliche Terminbuchungs-Formulare</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="sec4">
          <div className="four_li">
            <div className="four_lhs">
              <div className="li">
                <p>
                  praxis-website.de ist ein Projekt von softsourced. Seit mehr
                  als 3 Jahren entwickeln wir Webseiten und Applikationen für
                  den Bereich Health-Tech, Food-Tech und Travel-Tech. Unser
                  Fokus liegt dabei seit der ersten Stunde auf Qualität,
                  Funktionalität und hoher User-Experience. Kundenzufriedenheit
                  steht bei uns weiterhin ganz oben, wie unsere Zahlen
                  bestätigen. Überzeugen Sie sich selbst!
                </p>
                <ul>
                  <p>
                    <li>3 Jahre am Markt</li>
                  </p>
                  <p>
                    <li>180 Kundenprojekte</li>
                  </p>
                  <p>
                    <li>100% Kundenzufriedenheit</li>
                  </p>
                  <p>
                    <li>So viel Code wie nötig, so wenig Code wie möglich</li>
                  </p>
                </ul>
              </div>

              <div class="inner">
                <button type="submit" class="Btn1" href="#">
                  Angebot anfordern
                </button>
              </div>
            </div>
            <div className="four_rhs">
              <img src={Comp1} alt="Praxis" />
            </div>
          </div>
        </div>

        <div className="sec5">
          <div className="bind_sec5">
            <h2>Kostenlose und unverbindliche Erstberatung</h2>
            <h2>
              Gerne beantworten wir Ihnen sämtliche Fragen und erläutern unsere
              Pakete und Projektumsetzung.
            </h2>
            <h2>Bei uns gibt es keine Mogelpackung!</h2>
            <div className="inner">
              {" "}
              <button className="Btn1" href="#">
                Jetzt unverbindlich Angebot anfordern{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec3;
