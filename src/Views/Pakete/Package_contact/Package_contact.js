import React, { Component } from "react";

import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import "./Package_contact.scss";
class Package_contact extends Component {
  render() {
    return (
      <div className="pakete_contact_wrap">
        <div className="cont_form">
          <h1>3. Ihre Daten</h1>
          <div className="wrap_form">
            <form>
              <div className="row_one">
                <input
                  type="text"
                  name="email"
                  placeholder="Vorname,Nachname*"
                  s
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Iher E-Mail Adresse*"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="Iher Telefonnummer"
                />
              </div>
              <div>
                <textarea name="message" placeholder="Type Here" />
              </div>
            </form>
          </div>
        </div>

        <div className="pakt_last">
          <h1>Gerne beraten wir Sie persönlich!</h1>
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
            <button className="btn">Zu den Homepage-Paketen</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Package_contact;
