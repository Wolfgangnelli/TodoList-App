import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { db } from '../../config/db';
import AddTask from './AddTask';

const { tasks } = db;

describe('AddTask component', () => {
  it('should add a task when the form is submitted', async () => {
    const tasksListsId = 1;

    render(
      <MemoryRouter>
          <AddTask />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText('Name');
    const descriptionInput = screen.getByLabelText('Description');
    const priorityInput = screen.getByLabelText('Priority');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'Test Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(priorityInput, { target: { value: '1' } });
    fireEvent.click(submitButton);

    const addedTask = await tasks.get({ tasksListsId });

    expect(addedTask).toEqual({
      name: 'Test Task',
      description: 'Test Description',
      priority: 1,
      completed: false,
      tasksListsId,
    });
  });
});