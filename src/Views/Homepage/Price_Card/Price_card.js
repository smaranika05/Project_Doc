//import { Card, Button, Image} from 'semantic-ui-react';
import React, { Component } from "react";
import Cardimg from "./../../../Assets/card.png";
import "./Price_card.scss";
class Cardp extends Component {
  render() {
    return (
      <div className="card_wrapper">
        <div
          className="card_lhs"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="text_wapping">
            <h1>
              Ob Neugestaltung des Internetauftritts Ihrer Praxis, oder
              Umgestaltung von bestehenden Websites{" "}
            </h1>
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
                  <h1>1.490€</h1>

                  <p>
                    <button href="#">Zum Angebot</button>
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
                  <h1>1.990€</h1>

                  <p>
                    {" "}
                    <button href="#">Zum Angebot</button>
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
