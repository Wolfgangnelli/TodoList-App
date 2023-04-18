type TaskList = {
  title: string;
  id: number;
  todos: { title: string }[];
};

export type TasksList = {
  data: TaskList[];
};

export type WindowSizeObj = {
  width: undefined | number;
  height: undefined | number;
};
