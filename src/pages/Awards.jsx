import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import "./Awards.css";
import Background from "./BGimages/bgtake1.jpg";
import Award1 from "./AwardsPhoto/Award1.jpg";
import Award2 from "./AwardsPhoto/Award2.jpg";
import Award3 from "./AwardsPhoto/Award3.jpg";
import Award4 from "./AwardsPhoto/Award4.jpg";
import Award5 from "./AwardsPhoto/Award5.jpg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

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
                <Container>
                  <Row>
                    <Col xs>
                      <h1>2019</h1>
                      <ListGroup variant="flush">
                        <ListGroup.Item>UTA Taxidermy Competition</ListGroup.Item>
                        <ListGroup.Item>
                          Taxidermist Choice Best Bird-Mckenzie Taxidermy
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Best Waterfowl-Ducks Unlimited
                        </ListGroup.Item>
                        <ListGroup.Item> ITA Taxidermy Competition</ListGroup.Item>
                        <ListGroup.Item>3 Hour Bird Challenge</ListGroup.Item>
                        <ListGroup.Item>
                          Utah County Fair Taxidermy Competition
                        </ListGroup.Item>
                        <ListGroup.Item>Masters Best Waterfowl</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col xs>
                      <h1></h1>
                    </Col>
                    <Col xs>
                      <h1>2018</h1>
                      <ListGroup variant="flush" id="awardList">
                        <ListGroup.Item>UTA Taxidermy Competition</ListGroup.Item>
                        <ListGroup.Item>
                          Best Upland Habitat-Utah Chukar and Wildlife
                        </ListGroup.Item>
                        <ListGroup.Item>Best Professional Bird</ListGroup.Item>
                        <ListGroup.Item>Best Professional Waterfowl</ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
                {/* <img src={Award1} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" />
              <img src={Award2} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" />
              <img src={Award3}  style={{ width: "20%" }}className="img-fluid" alt="Responsive image" />
              <img src={Award4} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" />
            <img src={Award5} style={{ width: "20%" }} className="img-fluid" alt="Responsive image" /> */}
                <div className="card-deck">
                  <div id="awardCard" className="card">
                    <img
                      src={Award5}
                      className="card-img-top"
                      alt="Photo of award"
                    />
                  </div>
                  <div id="awardCard" className="card">
                    <img
                      src={Award2}
                      className="card-img-top"
                      alt="Photo of award"
                    />
                  </div>
                  <div id="awardCard" className="card">
                    <img
                      src={Award3}
                      className="card-img-top"
                      alt="Photo of award"
                    />
                  </div>
                  <div id="awardCard" className="card">
                    <img
                      src={Award4}
                      className="card-img-top"
                      alt="Photo of award"
                    />
                  </div>
                  <div id="awardCard" className="card">
                    <img
                      src={Award1}
                      id="awardPhoto1"
                      className="card-img-top"
                      alt="Photo of award"
                    />
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
