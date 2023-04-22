import Dexie, { Table } from 'dexie';
import { TaskListDexie, TaskDexie } from '../utils/types';

export class TasksSubClassedDexie extends Dexie {
    tasksLists!: Table<TaskListDexie>;
    tasks!: Table<TaskDexie>;

    constructor() {
        super('taskListDb');
        this.version(1).stores({
            tasksLists: '++id,title',
            tasks: '++id,name,description,priority,completed,tasksListsId'
        });
    }
}

export const db = new TasksSubClassedDexie();