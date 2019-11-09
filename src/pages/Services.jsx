import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import "./Services.css";
import Background from "./BGimages/bgtake1.jpg";

class Services extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="name">
          <div
            id="about"
            style={{
                backgroundImage: `url(${Background})`
            }}
          >
            <NavbarTop />
            <div className="container"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
