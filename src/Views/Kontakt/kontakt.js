import React, { Component } from "react";
import Comp3 from "./../../Assets/Mockup.png";
import {AiFillPhone} from "react-icons/ai";
import {GrMail} from "react-icons/gr";
import "./kontakt.scss";
class Kontakt extends Component {
  render() {
    return (
      <div className="kont_wrap">
          <div className="kont_lhs">
              <p>Gerne beraten wir Sie persönlich!</p>
              <p><AiFillPhone style={{color:"#E8505B", fontSize:"30px"}}/>+49 179 415 90 70</p>
              <p><GrMail style={{color:"#E8505B", fontSize:"30px"}}/>info@softsourced.de</p>

          </div>
          <div className="kont_rhs">
              <img src={Comp3} alt="Praxis"/>
          </div>

          </div>
     
    );
  }
}

export default Kontakt;