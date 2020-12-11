import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../Package_contact/Package_contact.scss";
import "./../Card_part_one/Card_part_one.scss";
import "./../Card_part_two/Card_part_two.scss";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

const FeedbackForm = ({ env }) => {
  const [feedback, setFeedback] = useState("");
  const [radio, setRadio] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [slideone, setSlideone] = useState("");
  const [slidetwo, setSlidetwo] = useState("");
  const [slidethree, setSlidthree] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

  //   const senderEmail = "shishirahere@gmail.com";

  // const handleCancel = () => {
  //   setFeedback("");
  // };

  const handleChange = (event) => {
    const field = event.target.id;
    if (field === "name") {
      setName(event.target.value);
    } else if (field === "email") {
      setEmail(event.target.value);
    } else if (field === "number") {
      setNumber(event.target.value);
    } else if (field === "feedback-entry") {
      setFeedback(event.target.value);
    } else if (field === "radio") {
      setFeedback(event.target.value);
    } else if (field === "slideone") {
      setSlideone(event.target.checked);
    } else if (field === "slidetwo") {
      setSlidetwo(event.target.checked);
    } else if (field === "slidethree") {
      setSlidthree(event.target.checked);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId,
      REACT_APP_EMAILJS_USERID: user,
    } = env;

    sendFeedback({
      templateId,
      //   senderEmail,
      receiverEmail,
      feedback,
      name,
      email,
      number,
      radio,
      slideone,
      slidetwo,
      slidethree,
      user,
    });

    setFormSubmitted(true);
  };

  // Note: this is using default_service, which will map to whatever
  // default email provider you've set in your EmailJS account.
  const sendFeedback = ({
    templateId,
    // senderEmail,
    receiverEmail,
    feedback,
    name,
    email,
    number,
    radio,
    slideone,
    slidetwo,
    slidethree,
    user,
  }) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          //   senderEmail,
          receiverEmail,
          feedback,
          name,
          email,
          number,
          radio,
          slideone,
          slidetwo,
          slidethree,
        },
        user
      )
      .then((res) => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true);
        }
      })
      // Handle errors here however you like
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  };

  if (formSubmitted && formSubmitSuccessful) {
    return (
      <h2 style={{ textAlign: "center", color: "#e8505b" }}>
        Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.
      </h2>
    );
    // alert("Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.");
  }

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
                  value={radio}
                  onChange={(e) => setRadio(e.target.value)}
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
                          id="slideone"
                          name="slideone"
                          // value={this.getValue}
                          // defaultChecked={this.state.checked}
                          // checked={state.slide1}
                          // value={this.getValue}
                          // onChange={this.handleCheck}
                          onChange={(e) => setSlideone(e.target.checked)}
                        />
                      }
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                          id="slidetwo"
                          name="slidetwo"
                          // value={this.getValue}
                          // checked={state.slide2}
                          // defaultChecked={this.state.checked}
                          onChange={(e) => setSlidetwo(e.target.checked)}
                          // onChange={this.handleCheck}
                          // value={this.getValue}
                        />
                      }
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                            id="slidethree"
                            name="slidethree"
                            // value={this.getValue}
                            // checked={state.slide2}
                            // defaultChecked={this.state.checked}
                            onChange={(e) => setSlidthree(e.target.checked)}
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
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="row_one">
                <input
                  name="name"
                  id="name"
                  onChange={handleChange}
                  placeholder="Vorname,Nachname*"
                  required
                  value={name}
                />

                <input
                  name="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="Ihre E-Mail Adresse*"
                  required
                  value={email}
                />
              </div>

              <div>
                {" "}
                <input
                  type="number"
                  name="number"
                  id="number"
                  onChange={handleChange}
                  placeholder="Ihre Telefonnummer"
                  required
                  value={number}
                />
              </div>

              <div>
                <textarea
                  id="feedback-entry"
                  name="feedback-entry"
                  onChange={handleChange}
                  placeholder="Hier ist Platz für Ihre Anmerkungen."
                  required
                  value={feedback}
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
};

FeedbackForm.propTypes = {
  env: PropTypes.object.isRequired,
};

export default FeedbackForm;
