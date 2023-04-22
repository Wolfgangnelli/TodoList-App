import * as Yup from 'yup';

export const taskListSchema = Yup.object({
    title: Yup.string().required("Title is required")
});

export const taskSchema = Yup.object({
    name: Yup.string().required("Task name is required"),
    description: Yup.string().required("Task description is required"),
    priority: Yup.number().required("Priority is required")
});

export const editTaskSchema = Yup.object({
    name: Yup.string().required("Task name is required"),
    description: Yup.string().required("Task description is required"),
    priority: Yup.number().required("Priority is required"),
    completed: Yup.boolean().required("Task status is required")
});