//import { Card, Button, Image} from 'semantic-ui-react';
import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Cardimg from "./../../../Assets/card.webp";
import "./Price_card.scss";
class Cardp extends Component {
  render() {
    // function click_me() {}
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
      <div className="card_wrapper">
        <div
          className="card_lhs"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="text_wapping">
            <h2>
              Ob Neugestaltung des Internetauftritts Ihrer Praxis, oder
              Umgestaltung von bestehenden Websites{" "}
            </h2>
            <p>
              Wir unterstützen Sie mit unserer Expertise zu einem gutem
              Preis-Leistungs-Verhältnis:
            </p>
          </div>
        </div>
        <div className="card_rhs">
          <div className="card_cont">
            <div
              className="c1"
              // data-aos="fade-down"
              // // data-aos-easing="linear"
              // data-aos-duration="1000"
              // data-aos-delay="500"
            >
              <div className="cardbody1">
                <img src={Cardimg} alt="Praxis" />
                <div class="cont">
                  <h2>1.490€</h2>
                  <p>Homepage Arzt LIGHT</p>
                  <p>
                    <a href="/Pakete">
                      <button>Zum Angebot</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="c2"
              // data-aos="fade-up"
              // // data-aos-easing="linear"
              // data-aos-duration="1000"
              // data-aos-delay="500"
            >
              <div className="cardbody2">
                <img src={Cardimg} alt="Praxis" />
                <div class="cont">
                  <h2>1.990€</h2>
                  <p>Homepage Arzt PLUS</p>
                  <p>
                    <a
                      // onClick={scrollToBottom}
                      href="/Pakete"
                    >
                      <button>Zum Angebot</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardp;
