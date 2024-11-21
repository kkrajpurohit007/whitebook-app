import AdminDashboard from "../admin/dashboard/AdminDashboard";
import Profile from "../admin/profile/Profile";
import Settings from "../admin/settings/Settings";
import ToDo from "../admin/todo/ToDo";

export const adminRoutes = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "setting",
    element: <Settings />,
  },
  {
    path: "todo",
    element: <ToDo />,
  },
];
