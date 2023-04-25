import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { db } from '../../../config/db';
import { MemoryRouter } from 'react-router-dom';
import TaskItem from './TaskItem';

// creo un mock del task pre testare il componente TaskItem
const mockTask = {
  id: 1,
  name: 'Task 1',
  description: 'Description 1',
  priority: 1,
  completed: false,
};

describe('TaskItem', () => {
  // 1. Verifico che il nome e la descrizione del task vengano renderizzati correttamente
  it('renders task name and description', () => {
    render(
    <MemoryRouter>
        <TaskItem task={mockTask} />
    </MemoryRouter>
    );

    const taskName = screen.getByText('Task 1');
    const taskDescription = screen.getByText('Description 1');

    expect(taskName).toBeInTheDocument();
    expect(taskDescription).toBeInTheDocument();
  });

  // 2. Verifico che la priorità del task venga renderizzata correttamente
  it('renders priority', () => {
    render(
    <MemoryRouter>
        <TaskItem task={mockTask} />
    </MemoryRouter>
    );

    const priority = screen.getByText(1);

    expect(priority).toBeInTheDocument();
  });

  // 3. Verifico che lo stato di completamento del task venga renderizzato correttamente
  it('renders completed status', () => {
    render(
    <MemoryRouter>
        <TaskItem task={mockTask} />
    </MemoryRouter>
    );

    const notCompletedStatus = screen.getByTestId('notcompleted');

    expect(notCompletedStatus).toBeInTheDocument();
  });

  // 4. Verifico che la funzione delete() del database venga chiamata con l'id corretto quando si clicca su icona del cestino
  it('calls deleteTask() with the correct id when clicking on the delete icon', () => {
    const deleteSpy = jest.spyOn(db.tasks, 'delete'); // Creates a mock function similar to jest.fn but also tracks calls to object[methodName]

    render(
    <MemoryRouter>
        <TaskItem task={mockTask} />
    </MemoryRouter>
    );

    const deleteIcon = screen.getByTestId('delete-icon');
    fireEvent.click(deleteIcon);

    expect(deleteSpy).toHaveBeenCalledWith(1);
  });
});