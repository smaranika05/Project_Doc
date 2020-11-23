import React, { Component } from "react";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import "./Card_part_one.scss";
export default function Card_part_one() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="Card_part_one">
      <hr style={{ borderTop: " 2px solid  #e8505b", margin: "1em 1em" }} />
      <div className="Card_part_one_wrap">
        <h1>1. Welches Paket darfs denn sein?</h1>
        <div className="card_bind">
          <div className="wrapper">
            <div className="card_section">
              <div className="wrap_cards">
                <p>Homepage</p>
                <p>Artz</p>
                <p>ab 1.950,- € (inkl. MwSt.)</p>
                <p>
                  <FormControl component="fieldset">
                    <FormControlLabel control={<Radio />} />
                  </FormControl>
                </p>
              </div>
            </div>
            <div className="card_section">
              <div className="wrap_cards">
                <p>Homepage</p>
                <p>Artz+</p>
                <p>ab 2.950,- € (inkl. MwSt.)</p>
                <p>
                  <FormControl component="fieldset">
                    <FormControlLabel control={<Radio />} />
                  </FormControl>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
