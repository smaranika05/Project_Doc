import React, { Component } from "react";

import Cardimg from "./../../../Assets/card.png";

import "./Package.scss";

class Package extends Component {
  render() {
    return (
      <div className="package_wrap">
        {/* Section one */}

        <div
          className="package_text"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <div className="text_flex">
            <p style={{ color: "#e8505b" }}>
              Konfiguration Ihrer persönlichen Praxis Website – Wie hätten Sie
              es denn gerne?
            </p>
            <p>
              Profitieren Sie von unserer Expertise und konfigurieren Sie ihre
              persönliche Webseite in nur 5 Minuten
            </p>
          </div>
        </div>
        <div className="pakt_price">
          <div
            className="pakete_gradient_one"
            data-aos="fade-right"
            data-aos-duration="3000"
          ></div>
          <div className="pakete_cards">
            <div className="anime_one">
              <div className="card_price">
                <img src={Cardimg} alt="praxis" />
                <p>1.490€</p>
                <div className="outer">
                  <button className="btn">Zum Angebot</button>
                </div>
              </div>
            </div>
            <div className="anime_two">
              <div className="card_price">
                <img src={Cardimg} alt="praxis" />
                <p>1.990€</p>
                <div className="outer">
                  <button className="btn">Zum Angebot</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pakete_gradient_two"
            data-aos="fade-left"
            data-aos-duration="3000"
          ></div>
        </div>
        {/* Section two computer section - one*/}
      </div>
    );
  }
}

export default Package;