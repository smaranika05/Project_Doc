import React, { Component } from "react";

import Comp3 from "./../../../Assets/Mockup.png";

import "./../Package_one_two.scss";
class Package_one extends Component {
  render() {
    return (
      <div className="package_one">
        {/* Section four computer section two */}
        <div className="pakete_section_computer">
          {/* <div className="section_wrap"> */}
          <div className="comp_lhs">
            <img src={Comp3} alt="praxis"></img>
          </div>
          <div className="comp_rhs">
            <div className="comp_rhs_wrap">
              <p>Homepage Arzt Plus</p>
              <p>Praxishomepage mit ausgiebigerem</p>
              <p>
                Leistungsspektrum, ideal für Großpraxen, die umfangreicher
                informieren möchten.
              </p>
              <p>Die Umsetzung dauert in etwa 10 Tage.</p>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* section five cards section-two */}
        <div className="pakete_section_cards">
          <div className="pkt_card" data-aos="fade-up" data-aos-duration="1000">
            <div className="section_card">
              <div className="card_head">Leistungen im Paket</div>
              <div className="card_cont">
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
      </div>
    );
  }
}

export default Package_one;
