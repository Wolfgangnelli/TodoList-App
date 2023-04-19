import { TasksLists } from '../data';

export const findTask = (selectedTask: number) => {
   return TasksLists.data.find(task => task.id === selectedTask);
};