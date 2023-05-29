import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./routes/home/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import extras from "./data/extras";
import ExtraView from "./views/ExtraView";
import ProfileUser from "./routes/profile/ProfileUser";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "my-profile",
    element: <ProfileUser />,
  },
];
extras.forEach((extra) => {
  routes.push({
    path: extra.name,
    element: <ExtraView extra={extra} />,
  });
});

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
