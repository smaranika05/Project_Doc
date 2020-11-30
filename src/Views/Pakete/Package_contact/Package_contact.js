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
        <div className="cont_form">
          <h2>3. Ihre Daten</h2>
          <div className="wrap_form">
            <form>
              <div className="row_one">
                <input
                  type="text"
                  name="email"
                  placeholder="Vorname,Nachname*"
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Ihre E-Mail Adresse*"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Haben Sie zusatzliche Anmerkungen?"
                />
              </div>
              <div className="btn">
                <button>Unverbindlich anfragen</button>
              </div>
            </form>
          </div>
        </div>

        <div className="pakt_last">
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
            <a onClick={scrollToTop}>
              <button className="btn">Zu den Homepage-Paketen</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Package_contact;
