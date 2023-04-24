/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Page, AddListSection } from "../../components/organisms";
import { TaskListCard } from "../../components/molecules";
import { MainTitle } from '../../components/atoms';
import "./TasksLists.scss";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from '../../config/db';

const { tasks, tasksLists } = db;

const TasksLists = () => {

  const allTasksLists: any = useLiveQuery(() => tasksLists.toArray(), []);
  const allTasks: any = useLiveQuery(() => tasks.toArray(), []);

  return (
    <Page>
      <MainTitle title="Tasks Lists" />
      <AddListSection />
      <Row>
        <Col>
          <TaskListCard tasksLists={allTasksLists} tasks={allTasks} />
        </Col>
      </Row>
    </Page>
  );
};

export default TasksLists;
