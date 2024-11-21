import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import TaskList from "../pages/TaskList";

export const publicRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/Dashboard",
    element: <DashboardPage />,
  },
  {
    path: "task-list",
    element: <TaskList />,
  },
];
