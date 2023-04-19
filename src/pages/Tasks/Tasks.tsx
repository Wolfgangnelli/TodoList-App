import React from "react";
import { Page } from "../../components/organisms";
import { GoBackLink, MainTitle } from "../../components/atoms";

const Tasks = () => {
  return (
    <Page>
      <GoBackLink />
      <MainTitle label="Tasks" />
    </Page>
  );
};

export default Tasks;
