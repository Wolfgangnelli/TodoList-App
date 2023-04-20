import React, { createContext, useState } from "react";
import "./App.scss";
import { Header, Footer } from "../components/organisms";
import { Container } from "react-bootstrap";
import Routes from "../routes";

export const SidePanelContext = createContext<any>({});

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);

  const handleOpenSidePanel = () => {
    setIsSidePanelOpen(true);
  };

  const handleCloseSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <SidePanelContext.Provider value={{isSidePanelOpen, handleOpenSidePanel, handleCloseSidePanel}}>
      <Header />
      <Container as="main" fluid="xxl">
        <Routes />
      </Container>
      <Footer />
    </SidePanelContext.Provider>
  );
}

export default App;
