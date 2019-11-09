import React, { Component } from "react";
import NavbarBottom from "../components/NavbarBottom";
import "./Home.css";
import Background from "./BGimages/bgtake1.jpg";
import Blogo from "./BGimages/Whiteeffects.png"

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
            <div className="container">
              <div className="row">
              <h6 id="mission" >Westbroek Taxidermy  holds high regards to  life and nature, 
               as we create quality masterpieces that will recapture moments in time.</h6>

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
