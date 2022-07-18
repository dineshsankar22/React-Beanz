import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  state = {};
  render() {
    const cardcomponent = [this.props.value.cardcomponent.multifield];
    var element = [];
    Object.keys(cardcomponent).map(function (item) {
      element = cardcomponent[item];
    });
    return (
      <div className="cardconcon">
        {Object.keys(element).map((item) => (
          <div className="ulmargin">
            <a href={element[item].linkURL}>
              <div className="roster-card">
                <img
                  className=""
                  src={element[item].linkURL}
                  width="90%"
                  height="150px"
                />
                <p className="gap color-p">{element[item].subtitle}</p>
                <p className="gap">{element[item].title}</p>
              </div>
            </a>
          </div>
        ))}
        <div className="mulbut">
          <a href="{properties.allcardlink}" target="blank">
            <button className="beanbtn">Learn more about coffee</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
