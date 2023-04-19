export type Task = {
  id: number, 
  name: string, 
  description: string, 
  priority: number, 
  dependency?: number, 
  inCharge: string, 
  status: string
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
