import React, { Component } from "react";

import Cardimg from "./../../../Assets/card.webp";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import "./Package.scss";

class Package extends Component {
  constructor(props) {
    super(props);
    this.scroll_here = this.scroll_here.bind(this);
  }

  // getContent(event) {
  //   this.props.callback(event.target.value);
  //   scroller.scrollTo("Card_part_one", {
  //     duration: 2000,
  //     delay: 100,
  //     smooth: true,
  //   });
  // }
  scroll_here() {
    scroller.scrollTo("Card_part_one", {
      duration: 2000,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="package_wrap">
        <div
          className="package_text"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <div className="text_flex">
            <h1 style={{ color: "#e8505b" }}>
              Konfiguration Ihrer persönlichen Praxis Website – Wie hätten Sie
              es denn gerne?
            </h1>
            <h2>
              Profitieren Sie von unserer Expertise und wählen Sie das passende
              Paket hin zu
            </h2>
            <h2> Ihrer persönlichen Webseite.</h2>
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
                <h2>1.490€</h2>
                <p>Homepage Arzt LIGHT</p>
                <div className="outer">
                  <a
                    onClick={this.scroll_here}
                    // onChange={this.getContent.bind(this)}
                  >
                    <button className="btn">Zum Angebot</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="anime_two">
              <div className="card_price">
                <img src={Cardimg} alt="package_two" />
                <h2>1.990€</h2>
                <p>Homepage Arzt PLUS</p>
                <div className="outer">
                  <a onClick={this.scroll_here}>
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
      </div>
    );
  }
}
// Package.protoTypes = {
//   callback: PropTypes.func,
// };
export default Package;
