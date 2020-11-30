import React, { Component } from "react";
import "./Icon.scss";
class Svg_left extends Component {
  render() {
    return (
      <svg className="svg_one">
        <defs>
          <marker
            id="n"
            markerWidth="4"
            markerHeight="8"
            refX="1"
            refY="1"
            viewBox="0 0 1 2"
          >
            <polygon points="1,2 0,0.9 1,0" fill="#e8505b" />
            {/* <polygon points="2,0" fill="#e8505b" /> */}
          </marker>
        </defs>
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke-width="2"
          marker-start="url(#n)"
          stroke="#e8505b"
        />
      </svg>
    );
  }
}

export default Svg_left;
