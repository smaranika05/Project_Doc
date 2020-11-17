//import { Card, Button, Image} from 'semantic-ui-react';
import React, { Component } from "react";
import Cardimg from "./../../Assets/card.png";
import "./card.scss";
class Cardp extends Component {
  render() {
    return (
      <div className="card_wrapper">
        <div className="card_lhs">
          <p style={{ fontSize: "25px" }}>
            Ob Neugestaltung des Internetauftritt Ihrer Praxis, oder
            Umgestaltung von bestehenden Websites{" "}
          </p>
          <p>
            Wir unterstützen Sie mit unserer Expertise zu gutem
            Preis-Leistungs-Verhältnis:
          </p>
        </div>
        <div className="card_rhs">
          <div className="card_cont">
            <div className="c1">
              <div className="cardbody1">
                <img src={Cardimg} alt="Praxis" />
                <div class="cont">
                  <h1 style={{ fontSize: "40px", fontWeight: "500" }}>
                    1.490€
                  </h1>
                  <p></p>
                  <p></p>
                  <p>
                    {" "}
                    <button href="#">Submit</button>
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="c2">
              <div className="cardbody2">
                <img src={Cardimg} alt="Praxis" />
                <div class="cont">
                  <h1 style={{ fontSize: "40px", fontWeight: "500" }}>
                    1.990€
                  </h1>
                  <p></p>
                  <p></p>
                  <p>
                    {" "}
                    <button href="#">Submit</button>
                  </p>
                  <p></p>
                  <p></p>
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
