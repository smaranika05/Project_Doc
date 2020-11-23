import React, { Component } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";

import "./Card_part_two.scss";
export default function Card_part_two() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="Card_part_two">
      <h1> 2. Folgende zusätzlichen Leistungen interessieren mich </h1>
      <div className="wrapping_cards">
        <div className="space_between">
          <div className="cards_flex">
            <div className="card_content">
              {" "}
              <p>Ich möchte die Inhalte der</p>
              <p>Webseite in Zukunft selber</p>
              <p> pflegen</p>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </FormGroup>
            </div>
          </div>
          <div className="cards_flex">
            <div className="card_content">
              <p>Ich benötige Ihre Unterstützung</p>
              <p>bei der Erstellung der</p>
              <p> Rechtstexte</p>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </FormGroup>
            </div>
          </div>
          <div className="cards_flex">
            <div className="card_content">
              <p>Ich benötige Unterstützung bei</p>
              <p>der Erstellung der Bildsprache</p>
              <p> und Texte</p>
              <div
                id="SwitchDiv"
                onclick="if ($('#SwitchInput').attr('checked')) {$('#SwitchInput').attr('checked', false);} else {$('#SwitchInput').attr('checked', true);}"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={checked} onChange={toggleChecked} />
                    }
                    style={{ display: "flex", justifyContent: "center" }}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
