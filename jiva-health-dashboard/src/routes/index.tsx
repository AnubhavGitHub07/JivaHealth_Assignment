import { createBrowserRouter } from "react-router-dom";
import UserManagement from "../pages/userManagement";
import UserDetails from "../pages/userDetails";
import NotFound from "../pages/notFound";

export const router = createBrowserRouter([
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