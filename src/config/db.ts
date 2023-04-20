import Dexie, { Table } from 'dexie';
import { TasksList } from '../utils/types';

export class TasksSubClassedDexie extends Dexie {
    tasks!: Table<TasksList>;

    constructor() {
        super('taskListApp');
        this.version(1).stores({
            tasks: '++id, data'
        });
    }
}

export const db = new TasksSubClassedDexie();