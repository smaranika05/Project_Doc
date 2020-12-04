import React, { Component } from "react";
import axios from "axios";
import "./Pakete/Package_contact/Package_contact.scss";
class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      message: "",
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
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
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
    );
  }
}

export default ContactForm;
