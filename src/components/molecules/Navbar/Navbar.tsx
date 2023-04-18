import React from "react";
import { Navbar as NavbarBootstrap } from "react-bootstrap";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <NavbarBootstrap
        bg="dark"
        expand="lg"
        variant="dark"
        fixed="top"
        collapseOnSelect
        className="custom-nav-bar-bg"
      >
        <NavbarBootstrap.Brand href="/" className="logo-home fw-bold ms-2">
          TaskList App
        </NavbarBootstrap.Brand>
      </NavbarBootstrap>
    </>
  );
};

export default Navbar;
