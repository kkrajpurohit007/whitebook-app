import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import PublicLayout from "../layouts/public/PublicLayout";
import Error404 from "../pages/Error404";
import ErrorPage from "../pages/ErrorPage";
import { publicRoutes } from "./publicRoutes";
import { adminRoutes } from "./adminRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: publicRoutes,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: adminRoutes,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
