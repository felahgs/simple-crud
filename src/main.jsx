import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import ErrorPage from "./pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./global.css";

// This configures the paths for our routes
// you can check here: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // The errorElement redirects the user to an error page if anything goes wrong.
    // It is not necessary, so don't worry about it if you are only looking for the basics.
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreateUser />,
    errorElement: <ErrorPage />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* The RouterProvider is responsible for rendering or Page Components based on the url */}
    <RouterProvider router={router} />
  </React.StrictMode>
);