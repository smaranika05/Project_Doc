import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import Cardimg from "./../../Assets/card.png";
import Comp3 from "./../../Assets/Mockup.png";
import { IoMdContact } from "react-icons/io";
import "./pakete.scss";
import "./pakete_card.scss";
export default function Pakete() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="pakete_wrap">
      {/* Section one */}
      <div className="pakt1" data-aos="fade-down" data-aos-duration="3000">
        <p style={{ color: "#e8505b" }}>
          Konfiguration Ihrer persönlichen Praxis Website – Wie hätten Sie es
          denn gerne?
        </p>
        <p>
          Profitieren Sie von unserer Expertise und konfigurieren Sie ihre
          persönliche Webseite in nur 5 Minuten
        </p>
      </div>
      <div className="pakt_price">
        <div
          className="pakete_gradient_one"
          data-aos="fade-right"
          data-aos-duration="3000"
        ></div>
        <div className="pakete_cards">
          <div>
            <div
              className="card_price"
              data-aos="fade-down"
              // data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <img src={Cardimg} alt="praxis" />
              <p>1.490€</p>
              <div className="outer">
                <button className="btn">Zum Angebot</button>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
            <div
              className="card_price"
              data-aos="fade-up"
              // data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <img src={Cardimg} alt="praxis" />
              <p>1.990€</p>
              <div className="outer">
                <button className="btn">Zum Angebot</button>
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
      <div className="pakete_section_computer">
        <div className="section_wrap">
          <div
            className="comp_lhs"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={Comp3} alt="praxis"></img>
          </div>
          <div
            className="comp_rhs"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="comp_rhs_wrap">
              <p>Homepage Arzt Light</p>
              <p>One-Page Design für Ihre Inhalte.</p>
              <p>Ein aussagekräftiges Aushängeschild ihrer Praxis.</p>
              <p>Die Umsetzung dauert in etwa 7 Tage.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section three cards section one */}
      <div className="pakete_section_cards">
        <div className="pkt_card" data-aos="fade-up" data-aos-duration="3000">
          <div className="section_card">
            <div className="card_head">Leistungen im Paket</div>
            <div className="card_cont" style={{ paddingTop: "5%" }}>
              <p>
                Konzeptionelle Beratung, 3 Designvorschläge, Website-Umsetzung
                (one-page-design), SEO
              </p>
              <hr />
              <p>Paket-Bereiche</p>
              <hr />
              <p>
                Leistungsspektrum, Team, Praxis, Kontakt, Anfahrtsbeschreibung
              </p>
              <hr />
              <p>Funktionalitäten</p>
              <hr />
              <p>Hero inkl. Imagery, Kontaktformular, Anfahrtsbeschreibung</p>
              <hr />
            </div>
          </div>
          <div className="section_card">
            <div className="card_head">Inkludierte Leistungen</div>
            <div className="card_cont" style={{ paddingTop: "40%" }}>
              <p>
                Entwicklung der Webseite unter Integration eines CMS zur
                Inhaltspflege
              </p>
              <hr />
              <p>Imagery Auswahl und Suchmaschinenoptimierung</p>
              <hr />
            </div>
          </div>
          <div className="section_card_pink">
            <div className="card_head_pink">Inkludierte Leistungen</div>
            <div className="card_cont_pink">
              <p> Homepage Arzt Light</p>
              <p>1.490€</p>
              <p>exkl. MwSt.</p>
              <p>+491794159070</p>
              <p>contact@softsourced.de</p>
            </div>
            <div className="outer">
              {" "}
              <button className="btn" href="#">
                {" "}
                Jetzt Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Section four computer section two */}
      <div className="pakete_section_computer">
        <div className="section_wrap">
          <div
            className="comp_lhs"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={Comp3} alt="praxis"></img>
          </div>
          <div className="comp_rhs">
            <div
              className="comp_rhs_wrap"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <p>Homepage Arzt Plus</p>
              <p>Praxishomepage mit ausgiebigerem</p>
              <p>
                Leistungsspektrum, ideal für Großpraxen, die umfangreicher
                informieren möchten.
              </p>
              <p>Die Umsetzung dauert in etwa 10 Tage.</p>
            </div>
          </div>
        </div>
      </div>
      {/* section five cards section-two */}
      <div className="pakete_section_cards">
        <div className="pkt_card" data-aos="fade-up" data-aos-duration="3000">
          <div className="section_card">
            <div className="card_head">Leistungen im Paket</div>
            <div className="card_cont" style={{ paddingTop: "5%" }}>
              <p>
                Konzeptionelle Beratung, 3 Designvorschläge, Website-Umsetzung
                (one-page-design), SEO
              </p>
              <hr />
              <p>Paket-Bereiche</p>
              <hr />
              <p>
                Homepage, Leistungsseite, Teamseite, Praxisseite, Kontaktseite
                mit Anfahrtsbeschreibung
              </p>
              <hr />
              <p>Funktionalitäten</p>
              <hr />
              <p>Hero inkl. Imagery, Kontaktformular, Anfahrtsbeschreibung</p>
              <hr />
            </div>
          </div>
          <div className="section_card">
            <div className="card_head">Inkludierte Leistungen</div>
            <div className="card_cont" style={{ paddingTop: "40%" }}>
              <p>
                Entwicklung der Webseite unter Integration eines CMS zur
                Inhaltspflege
              </p>
              <hr />
              <p>Imagery Auswahl und Suchmaschinenoptimierung</p>
              <hr />
            </div>
          </div>
          <div className="section_card_pink">
            <div className="card_head_pink">Inkludierte Leistungen</div>
            <div className="card_cont_pink">
              <p> Homepage Arzt Light</p>
              <p>1.990€</p>
              <p>exkl. MwSt.</p>
              <p>+491794159070</p>
              <p>contact@softsourced.de</p>
            </div>
            <div className="outer">
              {" "}
              <button className="btn" href="#">
                {" "}
                Jetzt Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: " 2px solid  #e8505b", margin: "1em 1em" }} />
      <div className="pakete_section_6">
        <h1>1. Welches Paket darfs denn sein?</h1>
        <div className="card2">
          <div className="section6_card">
            <div className="wrap_content6">
              <p>Homepage</p>
              <p>Artz</p>
              <p>ab 1.950,- € (inkl. MwSt.)</p>
              <p>
                <FormControl component="fieldset">
                  <FormControlLabel control={<Radio />} />
                </FormControl>
              </p>
            </div>
          </div>
          <div className="section6_card">
            <div className="wrap_content6">
              <p>Homepage</p>
              <p>Artz+</p>
              <p>ab 2.950,- € (inkl. MwSt.)</p>
              <p>
                <FormControl component="fieldset">
                  <FormControlLabel control={<Radio />} />
                </FormControl>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pakete_section_7">
        <h1> 2. Folgende zusätzlichen Leistungen interessieren mich </h1>
        <div className="card3">
          <div className="section7_card">
            <div className="wrap_content7">
              {" "}
              <p>Ich möchte die Inhalte der</p>
              <p>Webseite in Zukunft selber</p>
              <p> pflegen</p>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </FormGroup>
            </div>
          </div>
          <div className="section7_card">
            <div className="wrap_content7">
              <p>Ich benötige Ihre Unterstützung</p>
              <p>bei der Erstellung der</p>
              <p> Rechtstexte</p>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </FormGroup>
            </div>
          </div>
          <div className="section7_card">
            <div className="wrap_content7">
              <p>Ich benötige Unterstützung bei</p>
              <p>der Erstellung der Bildsprache</p>
              <p> und Texte</p>
              <div
                id="SwitchDiv"
                onclick="if ($('#SwitchInput').attr('checked')) {$('#SwitchInput').attr('checked', false);} else {$('#SwitchInput').attr('checked', true);}"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={checked} onChange={toggleChecked} />
                    }
                    style={{ display: "flex", justifyContent: "center" }}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>

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
      </div>
      <div className="pakt_last">
        <h1
          style={{
            color: "#e8505b",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Gerne beraten wir Sie persönlich!
        </h1>
        <div className="icons3">
          <p style={{ fontSize: "25px" }}>
            <AiTwotonePhone style={{ color: "#E8505B", fontSize: "25px" }} />
            +49 179 415 90 70
          </p>
          <br></br>
          <p style={{ fontSize: "25px" }}>
            <MdEmail style={{ color: "#E8505B", fontSize: "25px" }} />
            info@softsourced.de
          </p>
        </div>
        <div className="inner">
          <button className="btn">Zu den Homepage-Paketen</button>
        </div>
      </div>
    </div>
  );
}
