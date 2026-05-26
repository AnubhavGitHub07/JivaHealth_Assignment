import {
  createBrowserRouter,
} from "react-router-dom";

import UserManagement from "../pages/UserManagement";
import UserDetails from "../pages/UserDetails";
import NotFound from "../pages/NotFound";

export const router =
  createBrowserRouter([
    {
      path: "/",
      element: <UserManagement />,
    },

    {
      path: "/users/:id",
      element: <UserDetails />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);