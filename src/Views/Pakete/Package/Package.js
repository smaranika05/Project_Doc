import React, { Component } from "react";

import Cardimg from "./../../../Assets/card.webp";
import { animateScroll as scroll } from "react-scroll";
import "./Package.scss";

class Package extends Component {
  render() {
    function scrollToBottom() {
      scroller.scrollTo("Card_part_one", {
        duration: 2000,
        delay: 100,
        smooth: true,
      });
    }
    var Scroll = require("react-scroll");
    var scroller = Scroll.scroller;

    return (
      <div className="package_wrap">
        {/* Section one */}

        <div
          className="package_text"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <div className="text_flex">
            <h1 style={{ color: "#e8505b" }}>
              Konfiguration Ihrer persönlichen Praxis-Webseite – Wie hätten Sie
              es denn gerne?
            </h1>
            <h2>
              Profitieren Sie von unserer Expertise und wählen Sie das passende
              Paket für
            </h2>
            <h2> Ihre persönliche Webseite.</h2>
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
                <img src={Cardimg} alt="package_one" />
                <p>1.490€</p>
                <p>Homepage Arzt LIGHT</p>
                <div className="outer">
                  <a onClick={scrollToBottom}>
                    <button className="btn">Zum Angebot</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="anime_two">
              <div className="card_price">
                <img src={Cardimg} alt="package_two" />
                <p>1.990€</p>
                <p>Homepage Arzt PLUS</p>
                <div className="outer">
                  <a onClick={scrollToBottom}>
                    <button className="btn">Zum Angebot</button>
                  </a>
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
