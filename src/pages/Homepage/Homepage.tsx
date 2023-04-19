import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { Page } from "../../components/organisms";
import { ButtonLink } from "../../components/atoms";

const Homepage = () => {
  return (
    <Page>
      <Row>
        <Col>
          <h1 className="text-center">Welcome to TaskList App</h1>
          <div className="d-flex justify-content-center">
            <Image src="https://picsum.photos/1120/400" fluid rounded />
          </div>
        </Col>
      </Row>
      <Row className="py-3">
        <Col className="d-flex justify-content-center">
          <ButtonLink
            path="/task-list"
            label="Go to Tasks Lists"
            className="fw-bold"
          />
        </Col>
      </Row>
    </Page>
  );
};

export default Homepage;