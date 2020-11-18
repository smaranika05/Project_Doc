import React, { Component } from "react";
import Doc1 from "./../../Assets/Doc1.png";
import Dig from "./../../Assets/Digital.png";
import {AiFillPhone} from "react-icons/ai";
import {GrMail} from "react-icons/gr";
import "./refer.scss";
class   Refer extends Component {
  render() {
    return (
      <div className="refer_wrap">
          <div className="ref_one">
          <div className="refer_lhs">
              <p style={{color:"#E8505B"}}> Unsere Praxis Webseiten <span style={{color:"black"}}>– </span></p>
              <p> Modernes und frisches Webseiten-Design für <span  style={{color:"#E8505B"}}>Arztpraxen</span> und <span style={{color:"#E8505B"}} >Zahnarztpraxen</span></p>

          </div>
          <div className="refer_rhs">
              <img src={Doc1} alt="Praxis"/>
          </div>
          </div>
          <div className="ref_text" >
              <p style={{fontSize:"30px",display:"flex", justifyContent:"center"}} >Homepage für Ärzte</p>
              <p style={{fontSize:"30px",display:"flex", justifyContent:"center"}}>Unsere Referenzen</p>
              <p style={{fontSize:"30px",display:"flex", justifyContent:"center"}}>Sehen Sie hier wie wir anderen Ärzten und Praxen zu einem frischeren Online-Auftritt verholfen haben. </p>
          </div>
          <div className="ref_exmp" >
              <div className="exmp_lhs">
             <p style={{color:"#E8505B"}}>Allgemeinarztpraxis Dr.Dettner</p><br></br>
              
              <p style={{color:"#E8505B"}}> Paket: </p>
              <p>Homepage Arzt Plus</p><br></br>
              <p style={{color:"#E8505B"}}>Umsetzung:</p>
              <p>Konzept, Inhalte, Bildsprache, Content Management System, Suchmaschinenoptimierung, Rechtstexterstellung</p><br></br>
              <p style={{color:"#E8505B"}}>Zusatzfunktionen:</p>
              <p >Keine</p><br></br>
              <p style={{color:"#E8505B"}}>Kunde</p>
              <p>Dr. Ottmar Dettner</p><br></br>
              <p style={{color:"#E8505B"}}>Website:</p>
              <p>www.drdettner.de</p>
              </div>
              <div className="exmp_rhs">
                  <img src={Dig} alt="Praxis" style={{boxShow:"0 8px 16px 0 rgba(0,0,0,0.2)"}}/>

              </div>

          </div>
         

          </div>
     
    );
  }
}

export default Refer;
