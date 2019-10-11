import React, { Component } from "react";
import NavbarBottom from "../components/NavbarBottom";
import "./Home.css";
import Background from "./BGimages/bgtest1.jpg";
import Blogo from "./BGimages/BlogoWhiteTest1.png"

class Home extends Component {
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
            <div className="container">
              <div className="row">
                {/* <div className="col-9"></div> */}
                <div className="col-3" id="bigLogo">
                <img id="blogo" alt="Blogo" src= {Blogo}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavbarBottom />
      </div>
    );
  }
}
export default Home;
