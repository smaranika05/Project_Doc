import React, { Component } from "react";

// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Comp1 from "./../../../Assets/a-mock.png";
import "./Sec4.scss";
class Sec4 extends Component {
  render() {
    return (
      <div className="sec4_wrap">
        <div className="sec4">
          <div className="four_li">
            <div
              className="four_lhs"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
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

        <div className="sec4_bottom">
          <div className="bind_sec4_bottom">
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

export default Sec4;
