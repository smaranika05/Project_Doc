import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Comp1 from "./../../../Assets/a-mock.png";
import "./Sec4.scss";
class Sec4 extends Component {
  render() {
    function scrollToTop() {
      scroll.scrollToTop(-400);
    }
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
                  <a onClick={scrollToTop} style={{ cursor: "pointer" }}>
                    praxis-website.de{" "}
                  </a>
                  ist ein Projekt von{" "}
                  <a
                    href="https://softsourced.de/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    softsourced
                  </a>
                  . Seit mehr als 3 Jahren entwickeln wir Webseiten und
                  Applikationen für den Bereich Health Care, Food-Tech und
                  Travel-Tech. Unser Fokus liegt dabei seit der ersten Stunde
                  auf Qualität, Funktionalität und optimaler User Experience
                  (UX). Kundenzufriedenheit steht bei uns ganz oben, was sich an
                  unseren Leistungsdaten sehen lässt. Überzeugen Sie sich
                  selbst!.
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
                <a href="/Pakete">
                  <button type="submit" className="Btn1">
                    Zu den Website-Paketen
                  </button>
                </a>
              </div>
            </div>
            <div className="four_rhs">
              <img src={Comp1} alt="pakete" />
            </div>
          </div>
        </div>

        <div className="sec4_bottom">
          <div className="bind_sec4_bottom">
            <h2>Kostenlose und unverbindliche Erstberatung</h2>
            <p>
              Gerne beantworten wir Ihnen sämtliche Fragen und erläutern unsere
              Pakete und Projektumsetzung.
            </p>
            <p>Bei uns gibt es keine Mogelpackung!</p>
            <div className="inner">
              {" "}
              <a href="/Pakete">
                <button className="Btn1" href="#">
                  Jetzt unverbindlich Angebot anfordern{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec4;
