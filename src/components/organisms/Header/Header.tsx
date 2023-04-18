import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "../../molecules";

const Header = () => {
  return (
    <Container as="header" className="min-h">
      <Navbar />
    </Container>
  );
};

export default Header;
