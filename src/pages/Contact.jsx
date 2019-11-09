import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import "./Contact.css";
import Background from "./BGimages/bgtake1.jpg";

class Contact extends Component {
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
            <div className="container"></div>
          </div>
        </div>
        <NavbarTop />
      </div>
    );
  }
}
export default Contact;
