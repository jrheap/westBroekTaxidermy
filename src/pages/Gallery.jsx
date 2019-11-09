import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import "./Gallery.css"
import Background from "./BGimages/bgtake1.jpg";
import mallardOne from "./BGimages/Duck/Mallard/Mallard1.jpg";
import mallardTwo from "./BGimages/Duck/Mallard/Mallard2.jpg";
import mallardThree from "./BGimages/Duck/Mallard/Mallard3.jpg";
import mallardFour from "./BGimages/Duck/Mallard/Mallard4.jpg";
class Gallery extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="galleryPage">
          <NavbarTop />
          <div
            id="about"
            style={{
              backgroundImage: `url(${Background})`
            }}
        >
          <div className="container" id="mainCont">
            <div className="row">

            <div className="card nopadding" id="duck" style={{ width: "20%" }}>
              <img src={mallardOne} className="card-img-top" alt="..." />
            </div>
            <div className="card nopadding" id="duck"  style={{ width: "20%" }}>
              <img src={mallardTwo} className="card-img-top" alt="..." />
            </div>
            <div className="card nopadding" id="duck" style={{ width: "20%" }}>
              <img src={mallardThree} className="card-img-top" alt="..." />
            </div>
            <div className="card nopadding" id="duck" style={{ width: "20%" }}>
              <img src={mallardFour} className="card-img-top" alt="..." />
            </div> 
            </div>
          </div>
          </div>
          {/* this is a test */}
        </div>
      </div>
    );
  }
}

export default Gallery;
