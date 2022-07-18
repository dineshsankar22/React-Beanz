import React, { Component } from "react";
import "./profileright.css";
import right from "../images/right.webp";

class ProfileRight extends Component {
  state = {};
  render() {
    return (
      <div className="starrightprocontainerrg">
        <div className="starrightproimagerg">
          <img src={right} width="100%" />
        </div>
        <div className="starrightprotextnamerg">
          <h1 className="starrightproproname">
            {this.props.value.starprofileright.name}
          </h1>
          <h2 className="starrightproprodesc">
            {this.props.value.starprofileright.description}
          </h2>
        </div>
      </div>
    );
  }
}

export default ProfileRight;
