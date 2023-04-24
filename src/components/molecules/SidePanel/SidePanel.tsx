/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { SidePanelContext } from '../../../app/App';
import { Button } from '../../atoms';
import { Row, Col, Form, Button as BtspButton } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskListSchema } from '../../../schemas';
import { db } from '../../../config/db';
import { useWindowSize } from '../../../hooks/useWindowSize';
import "./SidePane.scss";
import { TaskListDexie } from '../../../utils/types';

const { tasksLists } = db;

interface Props {
    isOpen: boolean
    onClose: () => void
}

const SidePanel = (props: Props) => {
    const { isOpen, onClose } = props;

    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(isOpen);

    const { taskListId, setTaskListId } = useContext(SidePanelContext);
    const size = useWindowSize();

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
        setValue
    } = useForm({
        mode: "all",
        resolver: yupResolver(taskListSchema)
    });

    const handleClose = () => {
        setIsPanelOpen(false);
        onClose();
    };

    const addTaskList = async (data: any) => {
        await tasksLists.add({
            title: data.title
        });
      };

    const updateTaskList = async (data: any) => {
        await tasksLists.update(taskListId, {
            title: data.title
        });
        setTaskListId(null);
    };

    const handleAddTaskList = handleSubmit((data) => {
        taskListId ? updateTaskList(data) : addTaskList(data);
        reset();
        handleClose();
    });

    const getTaskList = async () => {
        const taskList = await tasksLists.get(taskListId);
        setValue('title', taskList?.title);
    };

    useEffect(() => {
        isOpen && setIsPanelOpen(true);
        taskListId && getTaskList();
    }, [isOpen]);

  return (
    <Row className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <Col>
        <Row>
            <Col className="side-panel-content">
                <Button className='close-button' onClick={handleClose} label={<i className='fa-regular fa-circle-xmark'></i>} />
            </Col>
        </Row>
        <Row className={`mt-4 px-1 ${size !== 'XS' && 'w-50'}`}>
            <Col>
                <Form onSubmit={handleAddTaskList}>
                    <Form.Group className="mb-3 fw-bold" controlId="title">
                        <Form.Label>Task List Title</Form.Label>
                        <Form.Control type="text" placeholder="Housecleaning" {...register("title")} required/>
                        {errors.title && <p>{String(errors.title.message)}</p>}
                    </Form.Group>
                    <BtspButton variant="primary" type="submit">
                        Submit
                    </BtspButton>
                </Form>
            </Col>
        </Row>
        </Col>
    </Row>
  );
};

export default SidePanel;