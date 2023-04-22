/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Page } from '../../components/organisms';
import { GoBackLink, MainTitle } from '../../components/atoms';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editTaskSchema } from '../../schemas';
import { useLocation, useNavigate } from 'react-router';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../config/db';

const TaskDetail = () => {

    let location = useLocation();
    let navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm({
        mode: "all",
        resolver: yupResolver(editTaskSchema)
    });
    
    const task = useLiveQuery(async () => {
        return await db.tasks.where({ id: +location.pathname.split('/')[4] }).toArray();
    }, []);
    
    const editTask = (data: any) => {
        const { name, description, priority, completed } = data;

        db.tasks.update(+location.pathname.split('/')[4], {
            name: name,
            description: description,
            priority: priority,
            completed: completed
        }).then((updated) => {
            if(updated) {
                navigate(-1);
            } else {
                console.error('Nothing was updated!');
            }
        });
    };

    const handleEditTask = handleSubmit((data) => {
        editTask(data);
    });

    useEffect(() => {
        if(task && !!task.length) {
            setValue("name", task[0].name);
            setValue("description", task[0].description);
            setValue("priority", task[0].priority);
            setValue("completed", task[0].completed);
        }
    }, [task]);

  return (
    <Page>
        <GoBackLink />
        <MainTitle title='Edit Task' />
        <Row>
            <Col>
                <Form onSubmit={handleEditTask}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Book flight" {...register("name")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Describe the task" {...register("description")} />
                    </Form.Group>
                    <Form.Group>
                    <Form.Group className="mb-3" controlId="completed">
                        <Form.Check type="checkbox" {...register("completed")} label="Completed" />
                    </Form.Group>
                    <Form.Label>Priority</Form.Label>
                    <Form.Select {...register("priority")}>
                        <option className='text-black'>Select priority</option>
                        <option className='text-black' value="1">One (High)</option>
                        <option className='text-black' value="2">Two (Medium)</option>
                        <option className='text-black' value="3">Three (Low)</option>
                    </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-3'>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Page>
  );
};

export default TaskDetail;