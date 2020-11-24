import React, { Component } from "react";
import Doc1 from "./../../Assets/Doc1.png";
import Dig from "./../../Assets/Digital.png";
import {AiFillPhone} from "react-icons/ai";
import {GrMail} from "react-icons/gr";
import "./refer.scss";
class   Refer extends Component {
  render() {
    return (
       <div className="refer">
      <div className="refer_wrap">
          <div className="ref_one">
          <div className="refer_lhs" data-aos="fade-up" data-aos-duration="1000">
              <p style={{color:"#E8505B"}}> Unsere Praxis Webseiten <span style={{color:"black"}}>– </span></p>
              <p> Modernes und frisches Webseiten-Design für <span  style={{color:"#E8505B"}}>Arztpraxen</span> und <span style={{color:"#E8505B"}} >Zahnarztpraxen</span></p>

          </div>
          <div className="refer_rhs" data-aos="fade-up" data-aos-duration="1000">
              <img src={Doc1} alt="Praxis"/>
          </div>
          </div>
          <div className="ref_text" data-aos="fade-up" data-aos-duration="1000">
              <p >Homepage für Ärzte</p>
              <p >Unsere Referenzen</p>
              <p >Sehen Sie hier wie wir anderen Ärzten und Praxen zu einem frischeren Online-Auftritt verholfen haben. </p>
          </div>
          <div className="ref_exmp"  >
              <div className="ref2">
              <div className="exmp_lhs" data-aos="fade-up" data-aos-duration="1000">
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
              <div className="exmp_rhs" data-aos="fade-up" data-aos-duration="1000">
              <div
              className="gradient"
              data-aos="fade-left"
              //data-aos-offset="300"
              data-aos-duration="1500"
              //data-aos-easing="ease-in-sine"
            ></div>
            <div className="ref_img">
                  <img src={Dig} alt="Praxis" style={{boxShow:"0 8px 16px 0 rgba(0,0,0,0.2)"}}/></div>

              </div>

          </div>
          </div>
         
          </div>
          </div>
     
    );
  }
}

export default Refer;
