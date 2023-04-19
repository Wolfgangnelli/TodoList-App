import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
  <Container as="footer">
    <Row className="h-footer">
      <Col className="d-flex justify-content-center">
      <p className="mb-0">© TaskList App</p>
      </Col>
    </Row>
  </Container>
  );
};

export default Footer;
