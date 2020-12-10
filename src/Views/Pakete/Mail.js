import React, { Component } from "react";

import FeedbackForm from "./Feedback_form/FeedbackForm";
import PropTypes from "prop-types";

class Mail extends Component {
  render() {
    return (
      <div>
        <FeedbackForm env={this.props.env} />
      </div>
    );
  }
}
Mail.propTypes = {
  env: PropTypes.object.isRequired,
};
export default Mail;
