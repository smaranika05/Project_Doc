import React, { Component } from "react";
import { Container } from "@material-ui/core";
import "./Loader.scss";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Container>
          <h1 className="title">
            Professionelle Webseiten und Homepages für Ärzte/Zahnärzte
          </h1>
        </Container>
      </div>
    );
  }
}

export default Loader;
