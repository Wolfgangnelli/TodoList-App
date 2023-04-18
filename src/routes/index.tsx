import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Homepage, NotFound, Tasks, TasksLists } from "../pages";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/task-list" element={<TasksLists />} />
      <Route path="/task-list/:id" element={<Tasks />} />
      <Route path="/*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
