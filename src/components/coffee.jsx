import React, { Component } from "react";
import "./coffee.css";
import coffee from "../images/coffee.webp";

class CoffeeField extends Component {
  state = {};
  render() {
    return (
      <div className="starcoffe">
        <h1 className="starcoffetitle"> {this.props.value.starcoffe.title} </h1>
        <img
          src={coffee}
          className="starcoffeimg"
          itemprop="contentUrl"
          data-cmp-hook-image="image"
          alt=""
        />

        <div className="starcoffebru">
          <h3 className="starcoffesubtitle">
            {" "}
            {this.props.value.starcoffe.subtitle}{" "}
          </h3>

          <h1 className="starcoffedescription">
            {" "}
            {this.props.value.starcoffe.description}{" "}
          </h1>
        </div>
        <div className="starcoffesunrise">
          <h3 className="starcoffesubtitle1">
            {" "}
            {this.props.value.starcoffe.subtitle1}{" "}
          </h3>

          <h1 className="starcoffedescription1">
            {" "}
            {this.props.value.starcoffe.description1}{" "}
          </h1>
        </div>
      </div>
    );
  }
}

export default CoffeeField;
