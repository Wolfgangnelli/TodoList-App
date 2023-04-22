import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Homepage, NotFound, Tasks, TasksLists, AddTask, TaskDetail } from "../pages";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/task-list" element={<TasksLists />} />
      <Route path="/task-list/:listId" element={<Tasks />} />
      <Route path="/task-list/:listId/add-task" element={<AddTask />} />
      <Route path="/task-list/:listId/edit-task/:taskId" element={<TaskDetail />} />
      <Route path="/*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
