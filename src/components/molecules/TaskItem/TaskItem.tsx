import React from 'react';
import { Task } from '../../../utils/types';
import { Row, Col } from 'react-bootstrap';
import "./TaskItem.scss";

interface Props {
    task: Task
}

const TaskItem = (props: Props) => {
    const { task: { name, description, priority, inCharge, status } } = props;

  return (
    <li className='p-2 my-3 border border-info rounded q-shadow'>
        <Row>
            <Col className='d-flex justify-content-center align-items-center'>
                <span className={`task-item-${status}`}>
                    <i className='fa-solid fa-circle'></i>
                </span>
            </Col>
            <Col xs={8}>
                <b>{name}</b>
                <p>{description}</p>
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
                <span>{priority}</span>
            </Col>
        </Row>
    </li>
  );
};

export default TaskItem;