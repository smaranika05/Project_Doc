import React, { Component } from "react";
//import doctor from "./../../assets/img/ultrasound.jpg";
// import Footer from "./../../components/footer/footer";
import "./../../Views/Heading.scss";
import "./impressum.scss";
class Impressum extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="imp">
        <div className="imp_wrapper">
          <div className="header">Impressum</div>
          <div className="border"></div>
          <div className="main">
            <h3 style={{ color: "#e8505b" }}>
              Impressum - Pflichtangaben nach dem Telemediengesetz (TMG, §5)
            </h3>

            <div class="body">
              <p style={{ color: "#e8505b" }}>Name und Praxisanschrift:</p>
              <p>
                Allgemeinarztpraxis Dr. med. Ottmar Dettner <br></br>Kissinger
                Str. 42<br></br> 97762 Hammelburg <br></br> Telefon: 09732-1247{" "}
                <br></br> Fax: 09732-1869 <br></br>E-Mail: dr.dettner@gmail.com
              </p>
            </div>
            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>
                Verantwortlich für die Inhalte dieser Webseite nach dem
                Rundfunkstaatsvertrag (RSTV, § 55 ABS. 2):
              </p>
              <p>Dr. med. Ottmar Dettner</p>
            </div>
            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>Ärztekammer:</p>
              <p>
                Bayerische Landesärztekammer <br></br> Mühlbaurstraße 16{" "}
                <br></br>
                81677 München <br></br> Webpräsenz:{" "}
                <a
                  href="https://www.blaek.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#393939", textDecoration: "none" }}
                >
                  https://www.blaek.de/
                </a>
              </p>
            </div>
            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>Zuständige Aufsichtsbehörde:</p>
              <p>
                Kassenärztliche Vereinigung <br></br> 80687 München <br></br>
                Elsenheimerstraße 39 <br></br> Webpräsenz:{" "}
                <a
                  href="https://www.kvb.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#393939", textDecoration: "none" }}
                >
                  https://www.kvb.de
                </a>
              </p>
            </div>
            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>
                Gesetzliche Berufsbezeichung & Staat der Verleihung dieser:
              </p>
              <p>Facharzt für Allgemeinmedizin, Deutschland</p>
            </div>

            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>Bildrechte:</p>
              <p>
                Die auf dieser Webseite verwendeten Fotos sind Eigentum der
                Allgemeinarztpraxis Dr. med. Ottmar Dettner. Eine Nutzung dieser
                Bilder ohne die Zustimmung des Eigentümers ist untersagt. Bei
                Zuwiderhandlung werden rechtliche Schritte eingeleitet.
              </p>
            </div>

            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>Berufsrechtliche Regelungen:</p>
              <p>
                Es gilt die Berufsordnung der Landesärztekammer Bayern (siehe{" "}
                <a
                  href="https://www.blaek.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#393939", textDecoration: "none" }}
                >
                  https://www.blaek.de/
                </a>
                ).
              </p>
            </div>

            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>
                Konzeption & Realisierung dieser Webseite:
              </p>
              <p>
                softsourced UG (siehe{" "}
                <a
                  href="https://softsourced.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#393939", textDecoration: "none" }}
                >
                  https://softsourced.de/
                </a>
                )<br></br> E-Mail: info@softsourced.de
              </p>
            </div>
            <div>
              <h3 style={{ color: "#e8505b" }}>
                Haftungsausschluss - Rechtliches
              </h3>
            </div>

            <div class="body">
              <p style={{ color: "#e8505b" }}>Streitschlichtung:</p>
              <p>
                Pflichtgemäß erfolgt hier der Hinweis für Verbraucher, dass die
                Europäische Kommission eine Plattform für die
                Online-Streitbeilegung anbietet (ohne die Notwendigkeit eines
                Gerichts):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#393939", textDecoration: "none" }}
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                Gleichzeitig erfolgt hier der Hinweis, dass wir nicht bereit
                sind, uns am Streitbeilegungsverfahren im Rahmen der
                Europäischen Online-Streitbeilegungs-Plattform zu beteiligen.
                Sollten Sie Kontakt mit uns aufnehmen wollen, so melden Sie sich
                bitte per E-Mail oder telefonisch. Die Kontaktdaten finden Sie
                oben im Impressum.
              </p>
            </div>

            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>
                Paragraph 1 - Warnhinweis zu Inhalten
              </p>
              <p>
                Sämtliche Inhalte dieser Webseite wurden mit äußerster Exaktheit
                und Gewissenhaftigkeit kostenfrei bereitgestellt und zugänglich
                gemacht. Der Webseitenanbieter übernimmt keine Gewähr bzgl. der
                Korrektheit und der gegenwärtigen Gültigkeit dieser Inhalte.
                Beim Aufruf dieser Inhalte kommt es zu keinem Vertragsverhältnis
                zwischen User und Anbieter, diesbezüglich besteht kein
                Rechtsbindungswillen seitens des Anbieters.
              </p>
            </div>

            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>
                Paragraph 2 - Verknüpfungen zu Webseiten Dritter
              </p>
              <p>
                Verknüpfungen zu Webseiten Dritter, auch externe Links genannt,
                sind Teil dieser Webseite, wobei für die auf den verlinkten
                Webseiten dargebotenen Inhalte der jeweilige Webseitenbetreiber
                haftet. Die Inhalte der verlinkten Webseiten wurden initial vom
                Anbieter dieser Webseite auf Rechtsverstöße hin untersucht. Bei
                dieser Initialuntersuchung wurden keinerlei Rechtsverstöße
                festgestellt. Jedoch sind Webseiteninhalte dynamisch, d.h. sie
                können sich mit der Zeit ändern. Über die Inhaltsgestaltung
                fremder Webseiten hat der Anbieter dieser Webseite keine
                Kontrolle, noch beansprucht er Eigentum auf Inhalte der von ihm
                verlinkten Webseiten. Eine permanente Überprüfung der Inhalte
                verlinkter Webseiten ist für den Anbieter dieser Webseite nicht
                möglich. Werden Rechtsverstöße bei Inhalten verlinkter Webseiten
                in Erfahrung gebracht, so werden diese Verknüpfungen zu
                Webseiten Dritter unmittelbar entfernt.
              </p>
            </div>

            <br></br>
            <div class="body">
              <p style={{ color: "#e8505b" }}>
                Paragraph 3 - Urheberrecht & Leistungsschutzrecht:
              </p>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheber- und
                Leistungsschutzrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Sollten Inhalte oder Seiten
                ohne Erlaubnis vervielfältigt oder weitergegeben werden, ist das
                strafbar. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
                Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                werden die Urheberrechte Dritter beachtet. Insbesondere werden
                Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
                um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.<br></br>Auch die Darbietung dieser Webseite in
                fremden Frames bedarf der vorherigen Zustimmung vom
                Seitenbetreiber.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressum;
