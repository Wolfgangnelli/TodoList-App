/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Page } from "../../components/organisms";
import { GoBackLink, MainTitle } from "../../components/atoms";
import { TaskItem } from '../../components/molecules';
import { Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import "./Tasks.scss";
import { LinkContainer } from "react-router-bootstrap";
import { db } from '../../config/db';

const { tasksLists, tasks } = db;

const Tasks = () => {
  const [taskListObj, setTaskListObj] = useState<any>();
  const [allTasks, setAllTasks] = useState<any>();

  let location = useLocation();
  const selectedTask = +location.pathname.split("/")[2];

  const getTaskList = async () => {
    const taskList = await tasksLists.where({id: +selectedTask}).toArray();
    setTaskListObj(taskList);
  };

  const getTasks = async () => {
    const allTasks = await tasks.where({ tasksListsId: +selectedTask }).toArray();
    setAllTasks(allTasks);
  };
  
  useEffect(() => {
    getTaskList();
    getTasks();
  }, [allTasks]);
  
  return (
    <Page>
      <GoBackLink />
      <MainTitle title="Tasks" />
        <Row>
          <Col className='d-flex justify-content-center align-items-center flex-column pt-3 pb-1'>
            <LinkContainer to={`${location.pathname}/add-task`} className="c-pointer">
                <span><i className='fa-regular fa-square-plus fa-2xl'></i></span>
            </LinkContainer>
            <p className='mb-0 pt-1'>Add Task</p>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <h1 className="h1"><strong>{taskListObj && taskListObj[0]?.title}</strong></h1>
          </Col>
        </Row>
      <Row>
        <Col>
          <ul className="list-unstyled">
            {allTasks && allTasks?.map((item: any) => (
            <TaskItem key={item.id} task={item} />
            ))}
          </ul>
        </Col>
      </Row>
    </Page>
  );
};

export default Tasks;
