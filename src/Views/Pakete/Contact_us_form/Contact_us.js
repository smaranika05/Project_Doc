import React, { Component } from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import "./../Card_part_one/Card_part_one.scss";
import "./../Card_part_two/Card_part_two.scss";
import axios from "axios";
import "./../Package_contact/Package_contact.scss";

class Contact_us extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      message: "",
      radio: "",
      slide1: "",
      slide2: "",
      slide3: "",
      status: "Submit",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "number") {
      this.setState({ number: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    } else if (field === "radio") {
      this.setState({ radio: event.target.value });
    } else if (field === "slide1") {
      this.setState({ slide1: event.target.checked });
    } else if (field === "slide2") {
      this.setState({ slide2: event.target.checked });
    } else if (field === "slide3") {
      this.setState({ slide3: event.target.checked });
    }
  }

  // handlecheck() {
  //   this.setState({ checked: !this.state.checked });
  // }
  // getValue() {
  //   if (this.state.checked) {
  //     this.setState({ value: "no" });
  //   } else {
  //     this.setState({ value: "yes" });
  //   }
  // }

  getInitialState() {
    return { checked: true };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "https://www.praxis-webseite.de/contact",
      // url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert(
          "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen."
        );
        this.setState({
          name: "",
          email: "",
          message: "",
          number: "",
          radio: "",
          slide1: "",
          slide2: "",
          slide3: "",
          status: "Submit",
        });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <>
        {/*-----------------------RADIO BUTTON SECTION------------------------- */}
        <div className="Card_part_one">
          <hr style={{ borderTop: " 2px solid  #e8505b", margin: "1em 1em" }} />
          <div className="Card_part_one_wrap">
            {" "}
            <h2>1. Welches Paket darfs denn sein?</h2>
            <div className="card_bind">
              <div className="wrapper">
                <FormControl component="fieldset">
                  <RadioGroup
                    id="radio"
                    value={this.state.radio}
                    onChange={(e) => this.setState({ radio: e.target.value })}
                    style={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    <div className="card_section">
                      <div className="wrap_cards">
                        <p>Homepage</p>
                        <p>Arzt</p>
                        <p>ab 1.490,- € (inkl. MwSt.)</p>
                        <p>
                          <FormControlLabel
                            type="radio"
                            id="Arzt"
                            name="myRadio"
                            value="Arzt"
                            control={<Radio />}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="card_section">
                      <div className="wrap_cards">
                        <p>Homepage</p>
                        <p>Arzt +</p>
                        <p>ab 1.990,- € (inkl. MwSt.)</p>
                        <p>
                          <FormControlLabel
                            type="radio"
                            id="Arzt Plus"
                            name="myRadio"
                            value="Arzt Plus"
                            control={<Radio />}
                          />
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------- TOGGLE BUTTON SECTION------------------------------------ */}

        <div className="Card_part_two">
          <h2> 2. Folgende zusätzlichen Leistungen interessieren mich </h2>
          <div className="wrapping_cards">
            <div className="space_between">
              <FormControl component="fieldset">
                <FormGroup
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="cards_flex">
                    <div className="card_content">
                      {" "}
                      <p>Ich möchte die Inhalte der</p>
                      <p>Webseite in Zukunft selber</p>
                      <p> pflegen</p>
                      <FormControlLabel
                        control={
                          <Switch
                            // checked={state.slide1}
                            // onChange={handleChange}
                            id="slide1"
                            name="slide1"
                            // value={this.getValue}
                            // defaultChecked={this.state.checked}
                            // checked={state.slide1}
                            // value={this.getValue}
                            // onChange={this.handleCheck}
                            onChange={(e) =>
                              this.setState({ slide1: e.target.checked })
                            }
                          />
                        }
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                  </div>
                  <div className="cards_flex">
                    <div className="card_content">
                      <p>Ich benötige Ihre Unterstützung</p>
                      <p>bei der Erstellung der</p>
                      <p> Rechtstexte</p>

                      <FormControlLabel
                        control={
                          <Switch
                            // checked={state.slide2}
                            // onChange={handleChange}
                            id="slide2"
                            name="slide2"
                            // value={this.getValue}
                            // checked={state.slide2}
                            // defaultChecked={this.state.checked}
                            onChange={(e) =>
                              this.setState({ slide2: e.target.checked })
                            }
                            // onChange={this.handleCheck}
                            // value={this.getValue}
                          />
                        }
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                  </div>
                  <div className="cards_flex">
                    <div className="card_content">
                      <p>Ich benötige Unterstützung bei</p>
                      <p>der Erstellung der Bildsprache</p>
                      <p> und Texte</p>
                      <div
                      //   id="SwitchDiv"
                      //   onclick="if ($('#SwitchInput').attr('checked')) {$('#SwitchInput').attr('checked', false);} else {$('#SwitchInput').attr('checked', true);}"
                      //
                      >
                        <FormControlLabel
                          control={
                            <Switch
                              id="slide3"
                              name="slide3"
                              // value={this.getValue}
                              // checked={state.slide2}
                              // defaultChecked={this.state.checked}
                              onChange={(e) =>
                                this.setState({ slide3: e.target.checked })
                              }
                              // onChange={this.handleCheck}
                              // value={this.getValue}
                            />
                          }
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </div>
                    </div>
                  </div>
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/*------------------------------- CONTACT FORM SECTION ------------------------------------------*/}
        <div className="pakete_contact_wrap">
          <div className="cont_form">
            <h2>3. Ihre Daten</h2>
            <div className="wrap_form">
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="row_one">
                  <input
                    type="text"
                    id="name"
                    placeholder="Vorname,Nachname*"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    required
                  />

                  <input
                    type="email"
                    id="email"
                    placeholder="Ihre E-Mail Adresse*"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                    aria-describedby="emailHelp"
                  />
                </div>
                {/* <div>
                  <input
                    type="text"
                    id="radio_button"
                    value={this.state.radio}
                    onChange={this.handleChange.bind(this)}
                    style={{ display: "none" }}
                  />
                </div> */}
                <div>
                  {" "}
                  <input
                    type="number"
                    id="number"
                    placeholder="Ihre Telefonnummer"
                    value={this.state.number}
                    onChange={this.handleChange.bind(this)}
                    required
                    aria-describedby="emailHelp"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    placeholder="Haben Sie zusatzliche Anmerkungen?"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    required
                  />
                </div>
                <div className="btn">
                  <button type="submit">Unverbindlich anfragen</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact_us;
