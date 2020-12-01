import React, { Component } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./Card_part_one.scss";
export default function Card_part_one() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="Card_part_one">
      <hr style={{ borderTop: " 2px solid  #e8505b", margin: "1em 1em" }} />
      <div className="Card_part_one_wrap">
        {" "}
        <h2>1. Welches Paket darfs denn sein?</h2>
        <div className="card_bind">
          <div className="wrapper">
            <FormControl component="fieldset">
              <RadioGroup
                // aria-label="gender"
                // name="gender1"
                value={value}
                onChange={handleChange}
                style={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                <div className="card_section">
                  <div className="wrap_cards">
                    <p>Homepage</p>
                    <p>Arzt</p>
                    <p>ab 1.490,- € (inkl. MwSt.)</p>
                    <p>
                      <FormControlLabel value="one" control={<Radio />} />
                    </p>
                  </div>
                </div>
                <div className="card_section">
                  <div className="wrap_cards">
                    <p>Homepage</p>
                    <p>Arzt +</p>
                    <p>ab 1.990,- € (inkl. MwSt.)</p>
                    <p>
                      <FormControlLabel value="two" control={<Radio />} />
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}
