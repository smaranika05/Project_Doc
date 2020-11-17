import React, { Component } from "react";
import { HiLightBulb } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import Comp2 from "./../../Assets/b-mock.png";

// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./sec6.scss";
class Sec6 extends Component {
  render() {
    return (
      <div className="sec6_wrap">
        <div className="wrap_sec6">
          <div className="six_lhs">
            <p>Die perfekte und optimierte Webseite für Ihre Arztpraxis</p>
            <p>
              Verschwenden Sie ihre wertvolle Zeit nicht mit dem Bau oder Umbau
              von Webseiten – wir übernehmen das gerne für Sie!
            </p>
            <p>
              Dank unseres klar definierten Projektablaufs wissen Sie zu jedem
              Zeitpunkt, wie es um Ihre Webseite steht. Sie haben jederzeit die
              Möglichkeit Feedback zu geben und zuzuarbeiten. Auch die komplette
              Projektausführung übernehmen wir gerne
            </p>
          </div>
          <div className="six_rhs">
            <img src={Comp2} />
          </div>
        </div>
        <div className="icon_sec">
          <h1>Ihr Weg zur perfekten Doctor-Website</h1>
          <p style={{ fontSize: "30px" }}>
            Wie läuft die Erstellung der Praxishomepage ab?
          </p>
          <div className="icons1">
            <p>
              <HiLightBulb style={{ color: "#E8505B", fontSize: "25px" }} />
              Definieren der Projektanforderungen
            </p>
            <p>
              <MdMessage style={{ color: "#E8505B", fontSize: "25px" }} />
              Content-Erstellung (Bilder, Texte)
            </p>
            <p>
              <FaLaptopCode style={{ color: "#E8505B", fontSize: "25px" }} />
              Programmierung und Implementierung
            </p>
          </div>
          <div className="icons2">
            <p>
              <BsGraphUp style={{ color: "#E8505B", fontSize: "25px" }} />
              Suchmaschinen-Perfektionierung
            </p>
            <p> </p>
            <p>
              <BsReverseLayoutTextWindowReverse
                style={{ color: "#E8505B", fontSize: "25px" }}
              />
              Rechtstext-Erstellung (Datenschutzrichtlinien, AGBs)
            </p>
          </div>
          <p>
            Wir bevorzugen den persönlichen Kontakt – aber auch per E-Mail und
            klar definierter Erwartungen können wir die Homepage Ihrer
            Arztpraxis umsetzen.{" "}
          </p>
        </div>
        <div className="six_next">
          <div className="wrap_six_next">
            <p>
              Zeit ist Geld – und das nehmen wir uns zu Herzen. Dank zahlreicher
              Webseiten-Projekte mitbayerischen Ärzten, kennen wir die
              Bedürfnisse unseres Kundenstamms sehr gut. Lückenlos gefüllte
              Terminkalender sind wichtig – und dabei wollen wir Sie
              unterstützen. Wir versuchen gerade die Umsetzung unserer Homepages
              für Ärzte und Zahnärzte besonders effizient zu gestalten – damit
              Sie Zeit für das wirklich wichtige haben – Ihre Patienten.
            </p>
            <p className="style_p">Marc Müller, geschäftsführer softsourced</p>
          </div>
        </div>
        <div className="contact">
          <h1>Gerne beraten wir Sie persönlich!</h1>
          <div className="icons3">
            <p style={{ fontSize: "25px" }}>
              <AiTwotonePhone style={{ color: "#E8505B", fontSize: "25px" }} />
              +49 179 415 90 70
            </p>
            <br></br>
            <p style={{ fontSize: "25px" }}>
              <MdEmail style={{ color: "#E8505B", fontSize: "25px" }} />
              contact@softsourced.de
            </p>
          </div>
          <div className="inner">
            <button className="btn">Zu den Homepage-Paketen</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec6;
