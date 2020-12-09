import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./Package_contact.scss";
class Package_contact extends Component {
  render() {
    function scrollToTop() {
      scroll.scrollToTop(-400);
    }

    return (
      <div className="pakete_contact_wrap">
        <div className="pakt_last" id="card_section">
          <h2>Gerne beraten wir Sie persönlich!</h2>
          <div className="icons3">
            <div className="contact_icons">
              <p className="c_icon">
                <AiTwotonePhone />
              </p>
              <p>+49 179 415 90 70</p>
            </div>

            <br></br>
            <div className="contact_icons">
              <p className="c_icon">
                <MdEmail />
              </p>
              <p> info@softsourced.de</p>
            </div>
          </div>
          <div className="inner">
            <a onClick={scrollToTop} href="!#">
              <button className="btn">Zu den Homepage-Paketen</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Package_contact;
