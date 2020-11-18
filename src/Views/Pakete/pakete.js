import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import Cardimg from "./../../Assets/card.png";
import Comp3 from "./../../Assets/Mockup.png";
import {IoMdContact} from "react-icons/io";
import "./pakete.scss";
export default function Pakete() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };


 
    return (
      <div className="pakete_wrap" style={{paddingTop:"100px"}}>
          <div className="pakt1" >
              <p style={{color:"#e8505b", fontSize:"30px"}}>Konfiguration Ihrer persönlichen Praxis Website – Wie hätten Sie es denn gerne?</p>
              <p style={{fontSize:"30px"}}>Profitieren Sie von unserer Expertise und konfigurieren Sie ihre persönliche Webseite in nur 5 Minuten</p>
          </div>
          <div className="pakt_price">
              
               <Card
                style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginRight: "100px",
                }}
              >
                  <img src={Cardimg} alt="praxis"/>
                  <p style={{display:"flex", justifyContent:"center", fontSize:"30PX"}}>1.490€</p>
                  <div className="outer">
                  <button className="btn"  style={{display:"flex", justifyContent:"center"}}>Zum Angebot</button></div>
              </Card>
              <Card
                style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                 
                  
                }}
              >
                  <img src={Cardimg} alt="praxis"/>
                  <p style={{display:"flex", justifyContent:"center", fontSize:"30PX"}}>1.990€</p>
                  <div className="outer">
                  <button className="btn" style={{display:"flex", justifyContent:"center"}}>Zum Angebot</button></div>
              </Card>

          </div>
          <div className="pakt2">
              <div className="pakt_comp1">
                  <div className="comp_lhs">
                      <img src={Comp3} alt="praxis"></img>
                  </div>
                  <div className="comp_rhs">
                      <p>Homepage Arzt Light</p>
                      <p>One-Page Design für Ihre Inhalte.</p>
                      <p>Ein aussagekräftiges Aushängeschild ihrer Praxis.</p>
                      <p>Die Umsetzung dauert in etwa 7 Tage.</p>
                  </div>
              </div>
          </div>
          <div className="pakt3">
              <div className="pkt_card" style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
              <Card  style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px"
                 }}>
                  <div className="card_head" style={{backgroundColor:"#F5F5F5" ,fontSize:"20px", padding:"30px", display:"flex", justifyContent:"center", fontWeight:"700"}}>
                  Leistungen im Paket
                  </div>
                  <div className="card_cont" style={{  padding:"100px 20px 100px 40px"}}>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Konzeptionelle Beratung, 3 Designvorschläge, Website-Umsetzung (one-page-design), SEO</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Paket-Bereiche</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}> Leistungsspektrum, Team, Praxis, Kontakt, Anfahrtsbeschreibung</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Funktionalitäten</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Hero inkl. Imagery, Kontaktformular, Anfahrtsbeschreibung</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  </div>

              </Card>
              <Card  style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px"
                 }}>
                  <div className="card_head" style={{backgroundColor:"#F5F5F5" , fontSize:"20px",padding:"30px", display:"flex", justifyContent:"center", fontWeight:"700"}}>
                  Inkludierte Leistungen
                  </div>
                  <div className="card_cont" style={{display:"flex", justifyContent:"center", flexDirection:"column", padding:"100px 20px 100px 40px"}}>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}> Entwicklung der Webseite unter Integration eines CMS zur Inhaltspflege</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Imagery Auswahl und Suchmaschinenoptimierung</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  </div>
                  

              </Card>
              <Card  style={{
                  width: "300px",
                  height:"800px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
                  backgroundImage:"linear-gradient(20deg, #CF149D 70%, #E8505C 100%)"
                 }}>
                  <div className="card_head" style={{backgroundColor:"#F5F5F5" ,color:"#e8505b",fontSize:"20px", padding:"30px", display:"flex", justifyContent:"center", fontWeight:"700"}}>
                  Inkludierte Leistungen
                  </div>
                  <div className="card_cont" style={{padding:"100px 0px 100px 0px",backgroundImage:"linear-gradient(20deg, #CF149D 70%, #E8505C 100%)"}}>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center", fontSize:"20px"}}> Homepage Arzt Light</p>
                  
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>1.990€</p>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>exkl. MwSt.</p>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>+491794159070</p>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>contact@softsourced.de</p>
                  </div>
                <div className="outer"> <button className="btn" href="#"> Jetzt Angebot anfordern</button>
                  
                </div> 
              </Card>
              
              </div>
          </div>
        <div className="pakt4">
        <div className="pakt_comp1">
                  <div className="comp_lhs">
                      <img src={Comp3} alt="praxis"></img>
                  </div>
                  <div className="comp_rhs">
                      <p>Homepage Arzt Plus</p>
                      <p>Praxishomepage mit ausgiebigerem</p>
                      <p>Leistungsspektrum, ideal für Großpraxen, die umfangreicher informieren möchten.</p>
                      <p>Die Umsetzung dauert in etwa 10 Tage.</p>
                  </div>
              </div>

        </div>
       <div className="pakt5">
       <div className="pkt_card" style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
              <Card  style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px"
                 }}>
                  <div className="card_head" style={{backgroundColor:"#F5F5F5" ,fontSize:"20px", padding:"30px", display:"flex", justifyContent:"center", fontWeight:"700"}}>
                  Leistungen im Paket
                  </div>
                  <div className="card_cont" style={{  padding:"100px 20px 100px 40px"}}>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Konzeptionelle Beratung, 3 Designvorschläge, Website-Umsetzung (one-page-design), SEO</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Paket-Bereiche</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}> Leistungsspektrum, Team, Praxis, Kontakt, Anfahrtsbeschreibung</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Funktionalitäten</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Hero inkl. Imagery, Kontaktformular, Anfahrtsbeschreibung</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  </div>

              </Card>
              <Card  style={{
                  width: "300px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px"
                 }}>
                  <div className="card_head" style={{backgroundColor:"#F5F5F5" , fontSize:"20px",padding:"30px", display:"flex", justifyContent:"center", fontWeight:"700"}}>
                  Inkludierte Leistungen
                  </div>
                  <div className="card_cont" style={{display:"flex", justifyContent:"center", flexDirection:"column", padding:"100px 20px 100px 40px"}}>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}> Entwicklung der Webseite unter Integration eines CMS zur Inhaltspflege</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  <p style={{display:"flex", justifyContent:"center",fontSize:"20px"}}>Imagery Auswahl und Suchmaschinenoptimierung</p>
                  <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
                  </div>
                  

              </Card>
              <Card  style={{
                  width: "300px",
                  height:"800px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
                  backgroundImage:"linear-gradient(20deg, #CF149D 70%, #E8505C 100%)"
                 }}>
                  <div className="card_head" style={{backgroundColor:"#F5F5F5" ,color:"#e8505b",fontSize:"20px", padding:"30px", display:"flex", justifyContent:"center", fontWeight:"700"}}>
                  Inkludierte Leistungen
                  </div>
                  <div className="card_cont" style={{padding:"100px 0px 100px 0px",backgroundImage:"linear-gradient(20deg, #CF149D 70%, #E8505C 100%)"}}>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center", fontSize:"20px"}}> Homepage Arzt Light</p>
                  
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>1.990€</p>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>exkl. MwSt.</p>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>+491794159070</p>
                  <p style={{display:"flex",color:"#fff", justifyContent:"center",fontSize:"20px"}}>contact@softsourced.de</p>
                  </div>
                <div className="outer"> <button className="btn" href="#"> Jetzt Angebot anfordern</button>
                  
                </div> 
              </Card>
              
              </div>

       </div>
       <hr style={{borderTop:" 2px solid  #e8505b", margin:"1em 1em"}}/>
       <div className="pakt6">
         <h1 style={{color:"#e8505b", display:"flex",justifyContent:"center"}}> 1. Welches Paket darfs denn sein?</h1>
         <div className="card2" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
         <Card  style={{
                  width: "300px",
                  
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
                 
                 
                 
                 }}>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Homepage</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Artz</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>ab 1.950,- € (inkl. MwSt.)</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}> <FormControl component="fieldset">
                   <FormControlLabel  control={<Radio />}  />
                     </FormControl></p>

                 </Card>
                 <Card  style={{
                  width: "300px",
                  
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
                 
                 }}>
                   <p  style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Homepage</p>
                   <p  style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Artz+</p>
                   <p  style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>ab 2.950,- € (inkl. MwSt.)</p>
                   
                   
                   <p  style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}> <FormControl component="fieldset">
                   <FormControlLabel  control={<Radio />}  />
                     </FormControl></p>
       

                 </Card>
                 </div>
       </div>
       <div className="pakt7">
       <h1 style={{color:"#e8505b", display:"flex",justifyContent:"center"}}>2. Folgende zusätzlichen Leistungen interessieren mich </h1>
       <div className="card3" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
       <Card  style={{
                  width: "300px",
                  
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
       
                 
                 
                 }}>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Ich möchte die Inhalte der</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Webseite in Zukunft selber</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}> pflegen</p>
               <FormGroup >
                <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
       
        style={{display:"flex", justifyContent:"center"}}/>
    </FormGroup>
                 </Card>
                 <Card  style={{
                  width: "300px",
                  
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
       
                 
                 
                 }}>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Ich benötige Ihre Unterstützung</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>bei der Erstellung der</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}> Rechtstexte</p>
               <FormGroup >
                <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
       
        style={{display:"flex", justifyContent:"center"}}/>
    </FormGroup>
                 </Card>
                 <Card  style={{
                  width: "300px",
                  
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  margin:"100px",
       
                 
                 
                 }}>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>Ich benötige Unterstützung bei</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}>der Erstellung der Bildsprache</p>
                   <p style={{ display:"flex",
                  justifyContent:"center", fontSize:"20px"}}> und Texte</p>
               <div id="SwitchDiv" onclick="if ($('#SwitchInput').attr('checked')) {$('#SwitchInput').attr('checked', false);} else {$('#SwitchInput').attr('checked', true);}">

               <FormGroup >
                <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
       
        style={{display:"flex", justifyContent:"center"}}/>
    </FormGroup>

</div>

                 </Card>

       </div>
       
       <div className="cont_form" >
       <h1 style={{color:"#e8505b", paddingLeft:"150px"}}>3. Ihre Daten</h1>
       <form style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
              
              
              <input type="text" name="name" placeholder="Varname, Nachname*" ></input>
              <br></br>
              
              <br></br>
              <input type="text" name="email" placeholder="Iher E-Mail Adresse"  />
              <br></br>
              
              <br></br>
              <input type="text" name="number" placeholder="Iher Telefonnummer" />
              <br></br>
             
              <br></br>
              <textarea name="message" placeholder="Type Here" />
              <br></br>

              
            </form>
            
       </div>
      
       </div>
       <div className="pakt_last">
       <h1 style={{color:"#e8505b", display:"flex",justifyContent:"center"}}>Gerne beraten wir Sie persönlich!</h1>
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


