export type Task = {
  id: number, 
  name: string, 
  description: string, 
  priority: number, 
  completed: boolean
}

export type TaskList = {
  title: string;
  id: number;
  tasks: Task[];
};

export type TasksList = {
  data: TaskList[];
};

export type WindowSizeObj = {
  width: undefined | number;
  height: undefined | number;
};


export type TaskDexie = {
  id?: number, 
  name: string, 
  description: string, 
  priority: number, 
  completed: boolean
  tasksListsId?: number
}

export type TaskListDexie = {
  title: string;
};

export type ActionType = {
  type: string
  payload: any
}