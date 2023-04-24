import React from 'react';
import { Task } from '../../../utils/types';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router';
import { db } from '../../../config/db';
import "./TaskItem.scss";

interface Props {
    task: Task
}

const TaskItem = (props: Props) => {
    const { task: { name, description, priority, completed, id } } = props;

    let location = useLocation();

    const deleteTask = async () => db.tasks.delete(id);

  return (
    <li className='p-2 my-3 border border-info rounded q-shadow'>
            <Row>
                <Col className='d-flex flex-column justify-content-around align-items-center'>
                    <span>{priority}</span>
                    <span className={`task-item-${completed ? 'completed' : 'notcompleted'}`}>
                        <i className='fa-solid fa-circle'></i>
                    </span>
                </Col>
                <Col xs={8}>
                    <b>{name}</b>
                    <p>{description}</p>
                </Col>
                <Col className='d-flex flex-column justify-content-around align-items-center'>
                    <LinkContainer to={`${location.pathname}/edit-task/${id}`} className='c-pointer'>
                        <span>
                            <i className='fa-solid fa-pen-to-square'></i>
                        </span>
                    </LinkContainer>
                    <span onClick={deleteTask} className='c-pointer text-danger'>
                        <i className='fa-solid fa-trash'></i>
                    </span>
                </Col>
            </Row>
    </li>
  );
};

export default TaskItem;