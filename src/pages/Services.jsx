import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import "./Services.css";
import Background from "./BGimages/bgtake1.jpg";
import ServTest from "./BGimages/ServiceTest.jpg";
import Award2 from "./AwardsPhoto/Award2.jpg";
import Award3 from "./AwardsPhoto/Award3.jpg";
import Award4 from "./AwardsPhoto/Award4.jpg";
import Award5 from "./AwardsPhoto/Award5.jpg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
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
            <div>
              <Container>
                <Row>
                  <Col id="services">
                    <h2>My Services:</h2>
                    <ListGroup id="serviceList">
                      <ListGroup.Item>Waterfowl</ListGroup.Item>
                      <ListGroup.Item>Game Birds</ListGroup.Item>
                      <ListGroup.Item>Swan Shoulder Mounts</ListGroup.Item>
                      <ListGroup.Item>Suspended Mounts</ListGroup.Item>
                      <ListGroup.Item>Dead Bird Mounts</ListGroup.Item>
                      <ListGroup.Item>Turkey Tail Display</ListGroup.Item>
                      <ListGroup.Item>Custom Habitat</ListGroup.Item>
                      <ListGroup.Item>
                        Handcrafted Bases/Pedestals
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col>
                    <img
                      id="servImg"
                      src={ServTest}
                      className="card-img-top"
                      alt="Photo of award"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
