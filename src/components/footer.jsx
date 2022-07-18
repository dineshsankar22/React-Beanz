import React, { Component } from "react";
import "./footer.css";
import logo from "../images/logo.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="starfootercon">
        <div className="starfooterlogo">
          <a href="https://www.beanz.com/us/en.html" target="blank">
            {" "}
            <img src={logo} />
          </a>
        </div>
        <div className="starfootercol">
          <div className="starfootercolumn">
            site <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Shop Coffee{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Our Roasters{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Barista's Choice{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Coffee Lowdown{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Our Story{" "}
            </a>
            <br />
          </div>
          <div className="starfootercolumn">
            Account <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Roasters Control{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Center{" "}
            </a>
            <br />
          </div>
          <div className="starfootercolumn">
            Support <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Contact Us{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Returns Policy{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Promotional Terms and Conditions{" "}
            </a>
            <br />
          </div>
          <div className="starfootercolumn">
            Follow Us <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Facebook{" "}
            </a>
            <br />
            <a
              className="footeranchor"
              href="https://www.beanz.com/us/en.html"
              target="blank"
            >
              {" "}
              Instagram{" "}
            </a>
            <br />
          </div>
        </div>
        <div className="starfootercopy">
          © 2022 Breville USA, Inc. All rights reserved. Terms of Use Privacy
          Policy Cookie Policy Social Responsibility Modern Slavery Act Site Map
        </div>
      </div>
    );
  }
}

export default Footer;
