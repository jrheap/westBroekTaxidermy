import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import "./Awards.css";
import Background from "./BGimages/bgtake1.jpg";
import Award1 from "./AwardsPhoto/Award1.jpg";
import Award2 from "./AwardsPhoto/Award2.jpg";
import Award3 from "./AwardsPhoto/Award3.jpg";
import Award4 from "./AwardsPhoto/Award4.jpg";
import Award5 from "./AwardsPhoto/Award5.jpg";

class Awards extends Component {
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

              <div className="container">
            <div className="row">
              {/* <img src={Award1} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" />
              <img src={Award2} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" />
              <img src={Award3}  style={{ width: "20%" }}className="img-fluid" alt="Responsive image" />
              <img src={Award4} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" />
            <img src={Award5} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" /> */}
<h1 id="awardsTitle">Awards</h1>
              <div className="card-deck">
                <div id="awardCard" className="card">
                  <img src={Award5} className="card-img-top" alt="Photo of award" />
                </div>
                <div id="awardCard" className="card">
                  <img src={Award2} className="card-img-top" alt="Photo of award" />
                </div>
                <div id="awardCard" className="card">
                  <img src={Award3} className="card-img-top" alt="Photo of award" />
                </div>
                <div  id="awardCard" className="card">
                  <img src={Award4} className="card-img-top" alt="Photo of award" />
                </div>
                <div  id="awardCard"className="card">
                  <img src={Award1} id="awardPhoto1" className="card-img-top" alt="Photo of award" />
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Awards;
