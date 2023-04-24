import React from 'react';
import { Page } from '../../components/organisms';
import { MainTitle, GoBackLink } from '../../components/atoms';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { db } from '../../config/db';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { taskSchema } from '../../schemas';
import { useWindowSize } from '../../hooks/useWindowSize';

const { tasks } = db;

const AddTask = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const size = useWindowSize();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: "all",
        resolver: yupResolver(taskSchema)
    });

    const addTask = async (data: any) => {
        const { name, description, priority } = data;
        
        await tasks.add({
            name: name,
            description: description,
            priority: priority,
            completed: false,
            tasksListsId: +location.pathname.split('/')[2],
        });
    };

    const handleAddTask = handleSubmit((data) => {
        addTask(data);
        reset();
        navigate(-1);
    });

  return (
    <Page>
        <GoBackLink />
        <MainTitle title='Add Task' />
        <Row className={`pt-3 ${size !== "XS" && "w-75 mx-auto"}`}>
            <Col>
                <Form onSubmit={handleAddTask}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Book flight" {...register("name")} />
                        {errors.name && <p>{String(errors.name.message)}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Describe the task" {...register("description")} />
                        {errors.description && <p>{String(errors.description.message)}</p>}
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Priority</Form.Label>
                    <Form.Select {...register("priority")}>
                        <option className='text-black'>Select priority</option>
                        <option className='text-black' value="1">One (High)</option>
                        <option className='text-black' value="2">Two (Medium)</option>
                        <option className='text-black' value="3">Three (Low)</option>
                    </Form.Select>
                    {errors.priority && <p>{String(errors.priority.message)}</p>}
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-2'>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Page>
  );
};

export default AddTask;