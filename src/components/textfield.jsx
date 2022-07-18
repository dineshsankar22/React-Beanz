import React, { Component } from "react";
import "./textfield.css";
import beanz from "../images/Beanz.webp";
class TextField extends Component {
  state = {};
  render() {
    return (
      <div className="startextcontainer">
        <img src={beanz} alt="Snow" width="100%" height=" 100%" />
        <div className="startextbottom-left">Bottom Left</div>
        <div className="startextcentered">
          <h1 className="startexttitle"> {this.props.value.startext.title} </h1>

          <h1 className="startextdesc">
            {this.props.value.startext.description}
          </h1>

          <a href="" target="blank">
            <button className="starbtn">Start Exploring</button>
          </a>
        </div>
      </div>
    );
  }
}

export default TextField;
