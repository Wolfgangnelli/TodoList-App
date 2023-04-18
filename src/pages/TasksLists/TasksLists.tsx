import React from "react";
import { Row, Col } from "react-bootstrap";
import { Page } from "../../components/organisms";
import "./TasksLists.scss";

const TasksLists = () => {
  return (
    <Page>
      <Row>
        <Col>
          <h1 className="text-center title-tasks-lists">Tasks Lists</h1>
        </Col>
      </Row>
    </Page>
  );
};

export default TasksLists;
