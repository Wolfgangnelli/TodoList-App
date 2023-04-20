import React from "react";
import { Row, Col } from "react-bootstrap";
import { Page, AddListSection } from "../../components/organisms";
import { TaskListCard } from "../../components/molecules";
import { MainTitle } from '../../components/atoms';
import "./TasksLists.scss";

const TasksLists = () => {
  return (
    <Page>
      <MainTitle label="Tasks Lists" />
      <AddListSection />
      <Row>
        <Col>
          <TaskListCard />
        </Col>
      </Row>
    </Page>
  );
};

export default TasksLists;
