import React, { Component } from "react";

import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./Contact_home.scss";
class Contact_home extends Component {
  render() {
    return (
      <div className="Contact_home_wrap">
        <div data-aos="fade-up" data-aos-duration="1500">
          <div className="about">
            <div className="wrap_about">
              <p>
                "Zeit ist Geld – und das nehmen wir uns zu Herzen. Dank
                zahlreicher Webseiten-Projekte mitbayerischen Ärzten, kennen wir
                die Bedürfnisse unseres Kundenstamms sehr gut. Lückenlos
                gefüllte Terminkalender sind wichtig – und dabei wollen wir Sie
                unterstützen. Wir versuchen gerade die Umsetzung unserer
                Homepages für Ärzte und Zahnärzte besonders effizient zu
                gestalten – damit Sie Zeit für das wirklich wichtige haben –
                Ihre Patienten."
              </p>
              <p className="style_p">
                Marc Müller, Geschäftsführer softsourced
              </p>
            </div>
          </div>
          <div className="contact">
            <h1>Gerne beraten wir Sie persönlich!</h1>
            <div className="icons3">
              <div className="icons1_flex">
                <p className="icons">
                  <AiTwotonePhone />
                </p>
                <p>+49 179 415 90 70</p>
              </div>
              <br></br>
              <div className="icons1_flex">
                <p className="icons">
                  <MdEmail />
                </p>
                <p>info@softsourced.de</p>
              </div>
            </div>
            <div className="inner">
              <a href="/Pakete">
                <button className="btn">Zu den Homepage-Paketen</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact_home;
