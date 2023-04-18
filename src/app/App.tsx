import React from "react";
import "./App.scss";
import { Header, Footer } from "../components/organisms";
import { Container } from "react-bootstrap";
import Routes from "../routes";

function App() {
  return (
    <>
      <Header />
      <Container as="main" fluid="xxl">
        <Routes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
