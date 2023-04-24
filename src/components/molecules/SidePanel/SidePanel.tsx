import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms';
import { Row, Col, Form, Button as BtspButton } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskListSchema } from '../../../schemas';
import { db } from '../../../config/db';
import { useWindowSize } from '../../../hooks/useWindowSize';
import "./SidePane.scss";

const { tasksLists } = db;

interface Props {
    isOpen: boolean
    onClose: () => void
}

const SidePanel = (props: Props) => {
    const { isOpen, onClose } = props;

    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(isOpen);

    const size = useWindowSize();

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit
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

    const handleAddTaskList = handleSubmit((data) => {
        addTaskList(data);
        reset();
        handleClose();
    });

    useEffect(() => {
        isOpen && setIsPanelOpen(true);
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