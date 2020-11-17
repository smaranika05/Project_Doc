import React, { Component } from "react";
import Doc from "./../../Assets/Doc.png";

// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./root.scss";
class Root extends Component {
  render() {
    return (

        <div className="root_container">
          <div className="left_content">
            <div className="content">
              <h1>Digitalisieren Sie Iher Praxis</h1>
              <p style={{ fontFamily: "lato", fontSize: "25px" }}>
              Professionelle Webseiten für Ärzte und Zahnärzte
              </p>
              <div className="listing">
              <ul>
                  <li>Homepage für Ärzte</li>
                  <li>Finden lassen und direkt online informieren!</li>
                  <li>Zunehmend viele Menschen suchen Ihren Arzt im Internet –Profitieren Sie von unserer Erfahrung und digitalisieren Sie Ihre Praxis!</li>
              </ul>
              </div>
            </div>

            <div id="outer">
  <div class="inner"><button type="submit" class="Btn1" href="#" >Zu unserem Angebot</button></div>
  <div class="inner"><button type="submit" class="Btn2"  href="#">Referenzen</button></div>
  
</div>
          </div>
          <div className="right_content">
<img src={Doc} alt="praxis"></img>
          </div>
          </div>
          
    );
  }
}

export default Root;
