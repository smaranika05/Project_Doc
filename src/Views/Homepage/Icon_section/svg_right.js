import React, { Component } from "react";
import "./Icon.scss";
class Svg_right extends Component {
  render() {
    return (
      <svg className="svg_one">
        <defs>
          <marker
            id="m"
            markerWidth="4"
            markerHeight="8"
            refX="0"
            refY="1"
            viewBox="0 0 1 2"
          >
            <polygon points="0,0 1,1 0,2" fill="#e8505b" />
          </marker>
        </defs>
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke-width="2"
          marker-end="url(#m)"
          stroke="#e8505b"
        />
      </svg>
    );
  }
}

export default Svg_right;
