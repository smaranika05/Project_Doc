import React, { Component } from "react";
import Doc1 from "./../../Assets/Doc1.png";
import Dig from "./../../Assets/Digital.webp";
import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import "./refer.scss";
class Refer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="refer">
        <div className="refer_wrap">
          <div className="ref_one">
            <div
              className="refer_lhs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="refer_contnt">
                <h1 style={{ color: "#E8505B" }}>
                  Unsere Praxis Webseiten{" "}
                  <span style={{ color: "black" }}>– </span>
                </h1>
                <h2>
                  Modernes und frisches Webseiten-Design für{" "}
                  <span style={{ color: "#E8505B" }}>Arztpraxen</span> und{" "}
                  <span style={{ color: "#E8505B" }}>Zahnarztpraxen</span>
                </h2>
              </div>
            </div>
            <div
              className="refer_rhs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="refer_img_wrap"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                <img src={Doc1} alt="doctor" />
              </div>
            </div>
          </div>
          <div className="ref_text" data-aos="fade-up" data-aos-duration="1000">
            <div className="section_two">
              <h2>Homepage für Ärzte</h2>
              <p style={{ color: "#E8505B" }}>Unsere Referenzen</p>
              <p>
                Sehen Sie hier wie wir anderen Ärzten und Praxen zu einem
                frischeren Online-Auftritt verholfen haben.{" "}
              </p>
            </div>
          </div>
          <div className="ref_exmp">
            <div className="ref2">
              <div
                className="exmp_lhs"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="exmp_lhs_wrap">
                  <h3 style={{ color: "#E8505B" }}>
                    Allgemeinarztpraxis Dr.Dettner
                  </h3>
                  <br></br>

                  <p style={{ color: "#E8505B" }}> Paket: </p>
                  <p>Homepage Arzt Plus</p>
                  <br></br>
                  <p style={{ color: "#E8505B" }}>Umsetzung:</p>
                  <p>
                    Konzept, Inhalte, Bildsprache, Content Management System,
                    Suchmaschinenoptimierung, Rechtstexterstellung
                  </p>
                  <br></br>
                  <p style={{ color: "#E8505B" }}>Zusatzfunktionen:</p>
                  <p>Keine</p>
                  <br></br>
                  <p style={{ color: "#E8505B" }}>Kunde</p>
                  <p>Dr. Ottmar Dettner</p>
                  <br></br>
                  <p style={{ color: "#E8505B" }}>Website:</p>
                  <p>www.drdettner.de</p>
                </div>
              </div>
              <div className="exmp_rhs">
                <div
                  className="gradient"
                  data-aos="fade-left"
                  //data-aos-offset="300"
                  data-aos-duration="2000"
                  //data-aos-easing="ease-in-sine"
                ></div>
                <div className="ref_img">
                  <img
                    src={Dig}
                    alt="reference"
                    style={{ boxShow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Refer;
