import React, { Component } from "react";
import "./Icon.scss";
class Svg_curve extends Component {
  render() {
    return (
      <svg className="svg_one">
        <defs>
          <marker
            id="c"
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
          id="l"
          x1="100"
          y1="-140%"
          x2="100"
          y2="0"
          stroke-width="2"
          // marker-start="url(#c)"
          stroke="#e8505b"
        />
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="0"
          stroke-width="2"
          marker-start="url(#c)"
          marker-end="url(#l)"
          stroke="#e8505b"
        />
        {/* <polyline
          points="0,40 40,40 40,10 10,"
          //   style="fill:white;stroke:red;stroke-width:4"
          stroke-width="2"
          stroke="red"
          fill="white"
          marker-start="url(#c)"
        /> */}
      </svg>
    );
  }
}

export default Svg_curve;
