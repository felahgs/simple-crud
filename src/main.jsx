import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);