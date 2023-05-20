import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import extras from "./data/extras";
import ExtraView from "./views/ExtraView";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <App />
        <Footer />
      </div>
    ),
  },
  {
    path: "/home",
    element: <Home />,
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
