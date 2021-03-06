import React, { Component } from "react";
import Comp3 from "./../../Assets/Mockup.webp";
import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import "./kontakt.scss";
class Kontakt extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="kontakt">
        <div className="kont_wrap">
          <div className="kont_cont">
            <div
              className="kont_lhs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact_content">
                <h1>Gerne beraten wir Sie persönlich!</h1>
                <div className="kontact_flex">
                  <p className="kontact_icon">
                    <AiFillPhone />
                  </p>
                  <p>+49 179 415 90 70</p>
                </div>
                <div className="kontact_flex">
                  <p className="kontact_icon">
                    <GrMail />
                  </p>
                  <p>info@softsourced.de</p>
                </div>
                {/* <p>
                  <GrMail style={{ color: "#E8505B", fontSize: "30px" }} />
                </p> */}
              </div>
            </div>
            <div className="kont_rhs">
              <div
                className="gradient_kontact"
                data-aos="fade-left"
                //data-aos-offset="300"
                data-aos-duration="2000"
                //data-aos-easing="ease-in-sine"
              ></div>
              <div
                className="Kontact_img"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                <img src={Comp3} alt="contactus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kontakt;
