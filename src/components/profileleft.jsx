import React, { Component } from "react";
import "./profileleft.css";
import left from "../images/left.webp";
class ProfileLeft extends Component {
  state = {};
  render() {
    return (
      <div className="starleftprocontainer">
        <div className="starleftproimage">
          <img src={left} width="100%" />
        </div>
        <div className="starleftprotextname">
          <h1 className="starleftproproname">
            {" "}
            {this.props.value.starprofileleft.name}{" "}
          </h1>
          <h2 className="starleftproprodesc">
            {" "}
            {this.props.value.starprofileleft.description}{" "}
          </h2>
        </div>
      </div>
    );
  }
}

export default ProfileLeft;
