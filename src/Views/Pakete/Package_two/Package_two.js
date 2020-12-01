import React, { Component } from "react";
import Comp3 from "./../../../Assets/Mockup.png";
import "./../Package_one_two.scss";
class Package_two extends Component {
  render() {
    function scrollToBottom() {
      scroller.scrollTo("Card_part_one", {
        duration: 2000,
        delay: 100,
        smooth: true,
        // Scrolls to element + 50 pixels down the page
      });
    }
    var Scroll = require("react-scroll");
    var scroller = Scroll.scroller;
    return (
      <div className="package_two">
        <div className="pakete_section_computer">
          {/* <div className="section_wrap"> */}
          <div className="comp_lhs">
            <img src={Comp3} alt="package_two"></img>
          </div>
          <div className="comp_rhs">
            <div className="comp_rhs_wrap">
              <h3>Homepage Arzt PLUS</h3>
              <h3>Praxishomepage mit ausgiebigerem Umfang. </h3>
              <h3>Ideal für Praxen, die umfangreicher informieren möchten.</h3>
              <h3>Die Umsetzung dauert in etwa 10 Tage.</h3>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* section five cards section-two */}
        <div className="pakete_section_cards">
          <div className="pkt_card" data-aos="fade-up" data-aos-duration="1000">
            <div className="section_card">
              <div className="card_head">Leistungen im Paket</div>
              <div className="card_cont" style={{ paddingTop: "5%" }}>
                <p>
                  Konzeptionelle Beratung, 3 Designvorschläge, Website-Umsetzung
                  inkl. 5 Unterseiten, SEO
                </p>
                <hr />
                <p>Paketbereiche</p>

                <p>
                  Homepage, Leistungsseite, Teamseite, Praxisseite, Kontaktseite
                  mit Anfahrtsbeschreibung
                </p>
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
                <p> Homepage Arzt Plus</p>
                <p>1.990€ </p>
                <p>exkl. MwSt</p>
                <p>+491794159070</p>
                <p>info@softsourced.de</p>
              </div>
              <div className="outer">
                <a onClick={scrollToBottom}>
                  <button className="btn" href="#">
                    Jetzt Angebot anfordern
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Package_two;
