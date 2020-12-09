import React, { Component } from "react";

import Comp3 from "./../../../Assets/Mockup.webp";

import "./../Package_one_two.scss";
class Package_one extends Component {
  render() {
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
      <div className="package_one">
        {/* Section four computer section two */}
        <div className="pakete_section_computer">
          {/* <div className="section_wrap"> */}
          <div className="comp_lhs">
            <img src={Comp3} alt="laptop"></img>
          </div>
          <div className="comp_rhs">
            <div className="comp_rhs_wrap">
              <h3>Homepage Arzt LIGHT</h3>
              <h3>One-Page Design für Ihre Inhalte.</h3>
              <h3>Ein aussagekräftiges Aushängeschild ihrer Praxis.</h3>
              <h3>Die Umsetzung dauert in etwa 7 Tage.</h3>
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
                  im One-Page-Design, SEO
                </p>
                <hr />
                <p>Paketbereiche</p>
                <p>Leistungsspektrum, Team, Kontakt, Anfahrtsbeschreibung</p>
                <hr />
                <p>Funktionalitäten</p>
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
                <p>Homepage Arzt Light</p>
                <p>1.490€</p>
                <p>exkl. MwSt.</p>
                <p>+491794159070</p>
                <p>info@softsourced.de</p>
              </div>
              <div className="outer">
                <a onClick={scrollToBottom} href="!#">
                  <button className="btn">Jetzt Angebot anfordern</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Package_one;
