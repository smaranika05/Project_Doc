import React, { Component } from "react";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

import "./Card_part_two.scss";
export default function Card_part_two() {
  const [state, setState] = React.useState({
    slide1: true,
    slide2: false,
    slide3: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
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
                        checked={state.slide1}
                        onChange={handleChange}
                        name="slide1"
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
                        checked={state.slide2}
                        onChange={handleChange}
                        name="slide2"
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
                    id="SwitchDiv"
                    onclick="if ($('#SwitchInput').attr('checked')) {$('#SwitchInput').attr('checked', false);} else {$('#SwitchInput').attr('checked', true);}"
                  >
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.slide3}
                          onChange={handleChange}
                          name="slide3"
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
  );
}
