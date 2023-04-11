import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Blog";
import Statistic from "./Statistic";
import Applied from "./Applied";
import Details from "./components/details/Details";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/Statistics",
    element: <Statistic />,
  },
  {
    path: "/applied",
    element: <Applied />,
  },
  {
    path: "/details/:id",
    element: <Details />,
    loader: () => fetch("data.json"),
  },
  {
    path: "*",
    element: <h2>Oops!</h2>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
