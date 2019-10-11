import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
// import "./Gallery.css"
import Background from "./BGimages/bgtest1.jpg";

class Gallery extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="name">
          <NavbarTop  />
          <div
            id="about"
            style={{
                backgroundImage: `url(${Background})`
            }}
          ></div>
        </div>
      </div>
    );
  }
}
export default Gallery;
