import React from "react";
import { Page } from "../../components/organisms";
import { GoBackLink, MainTitle } from "../../components/atoms";
import { TaskItem } from '../../components/molecules';
import { Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { findTask } from '../../utils';
import "./Tasks.scss";

const Tasks = () => {
  let location = useLocation();
  const selectedTask = +location.pathname.split("/")[2];

  const task = findTask(selectedTask);
  
  return (
    <Page>
      <GoBackLink />
      <MainTitle label="Tasks" />
        <Row className="pt-4">
          <Col>
            <h1 className="h1"><strong>{task?.title}</strong></h1>
          </Col>
        </Row>
      <Row>
        <Col>
          <ul className="list-unstyled">
            {task?.tasks.map(item => (
            <TaskItem key={item.id} task={item} />
            ))}
          </ul>
        </Col>
      </Row>
    </Page>
  );
};

export default Tasks;
