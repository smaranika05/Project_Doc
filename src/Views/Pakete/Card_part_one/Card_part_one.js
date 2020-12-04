import React, { Component } from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./Card_part_one.scss";
class Card_part_one extends Component {
  // getInitialState() {
  //   return {
  //     site: "",
  //   };
  // }
  // onSiteChanged(e) {
  //   this.setState({
  //     site: e.currentTarget.value,
  //   });
  // }

  state = {
    value: "radio-1",
  };
  getContent(event) {
    this.props.callback(event.target.value);
  }
  handleChange(event) {
    this.setState({
      value: event.currentTarget.value,
    });
  }

  render() {
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
                  // value={value}

                  style={{ flexDirection: "row", flexWrap: "wrap" }}
                >
                  <div className="card_section">
                    <div className="wrap_cards">
                      <p>Homepage</p>
                      <p>Arzt</p>
                      <p>ab 1.490,- € (inkl. MwSt.)</p>
                      <p>
                        {/* <FormControlLabel
                          type="radio"
                          value="one"
                          name="one"
                          // checked={this.state.site === "one"}
                          onChange={this.onSiteChanged}
                          // checked={this.state.site === "one"}
                          // onChange={(e) => this.handleChange(e)}
                          control={<Radio />}
                        /> */}
                        <input
                          type="radio"
                          id="radio-1"
                          name="myRadio"
                          value="radio-1"
                          checked={this.state.selected === "radio-1"}
                          onChange={(e) =>
                            this.setState({ value: e.target.value })
                          }
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
                        {/* <FormControlLabel
                          type="radio"
                          value="two"
                          name="two"
                          // checked={this.state.site === "two"}
                          onChange={this.onSiteChanged}
                          // checked={this.state.site === "one"}
                          // onChange={(e) => this.handleChange(e)}
                          control={<Radio />}
                        /> */}
                        <input
                          type="radio"
                          id="radio-2"
                          name="myRadio"
                          value="radio-2"
                          checked={this.state.selected === "radio-2"}
                          onChange={(e) =>
                            this.setState({ value: e.target.value })
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <p id="one">{this.state.value}</p>
                </RadioGroup>
              </FormControl>
              {/* <p>{this.state.site}</p> */}
              <p>
                {" "}
                <p onChange={this.getContent.bind(this)}>
                  {/* {document.querySelector('input[name=myRadio]:checked')}
                   */}
                  {this.state.value}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Card_part_one.protoTypes = {
  callback: PropTypes.func,
};
export default Card_part_one;
